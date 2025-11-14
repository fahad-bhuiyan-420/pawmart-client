import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from './layout/Root.jsx';
import Register from './Components/Register.jsx';
import Home from './Components/Home.jsx';
import Products from './Components/Products.jsx';
import PetProducts from './Components/PetProducts.jsx';
import PetFood from './Components/PetFood.jsx';
import PetAccessories from './Components/PetAccessories.jsx';
import PetCare from './Components/PetCare.jsx';
import ProductListings from './Components/ProductListings.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AddListings from './Components/AddListings.jsx';
import MyListings from './Components/MyListings.jsx';
import MyOrders from './Components/MyOrders.jsx';
import PrivateRouter from './provider/PrivateRouter.jsx';
import Login from './Components/Login.jsx';
import UpdatePassword from './Components/UpdatePassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/recentListings'),
        Component: Home
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'updatePassword',
        Component: UpdatePassword
      },
      {
        path: 'addListings',
        element: <PrivateRouter><AddListings></AddListings></PrivateRouter>
      },
      {
        path: 'myListings',
        element: <PrivateRouter><MyListings></MyListings></PrivateRouter>
      },
      {
        path: 'myOrders',
        element: <PrivateRouter><MyOrders></MyOrders></PrivateRouter>
      },
      {
        path: '/products',
        loader: () => fetch('http://localhost:3000/products'),
        Component: Products,
        children: [
          {
            index: true,
            loader: () => fetch('http://localhost:3000/products'),
            Component: ProductListings
          },
          {
            path: 'pet',
            loader: () => fetch('http://localhost:3000/products'),
            Component: PetProducts
          },
          {
            path: 'food',
            loader: () => fetch('http://localhost:3000/products'),
            Component: PetFood
          },
          {
            path: 'accessories',
            loader: () => fetch('http://localhost:3000/products'),
            Component: PetAccessories
          },
          {
            path: 'care',
            loader: () => fetch('http://localhost:3000/products'),
            Component: PetCare
          }
        ]
      },
      {
        path: '/products/:id',
        loader: () => fetch(`http://localhost:3000/products`),
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>
      },


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)

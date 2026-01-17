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
import About from './Components/About.jsx';
import DashBoard from './layout/DashBoard.jsx';
import Charts from './Components/Charts.jsx';
import NotAuthorized from './Components/NotAuthorized.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        loader: () => fetch('https://pawmart-server-rho.vercel.app/recentListings'),
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
        path: '/products',
        loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
        Component: Products,
        children: [
          {
            index: true,
            loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
            Component: ProductListings
          },
          {
            path: 'pet',
            loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
            Component: PetProducts
          },
          {
            path: 'food',
            loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
            Component: PetFood
          },
          {
            path: 'accessories',
            loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
            Component: PetAccessories
          },
          {
            path: 'care',
            loader: () => fetch('https://pawmart-server-rho.vercel.app/products'),
            Component: PetCare
          }
        ]
      },
      {
        path: '/about',
        Component: About
      },

      {
        path: '/products/:id',
        loader: () => fetch(`https://pawmart-server-rho.vercel.app/products`),
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>
      },


    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRouter><DashBoard></DashBoard></PrivateRouter>,
    children: [
      {
        index: true,
        element: <h2></h2>
      },
      {
        path: 'add-listing',
        Component: AddListings
      },
      {
        path: 'my-listing',
        Component: MyListings
      },
      {
        path: 'my-orders',
        Component: MyOrders
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)

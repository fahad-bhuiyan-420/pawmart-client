import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import button from 'daisyui/components/button';

const NavBar = () => {
    const {user, logOut} = use(AuthContext);
    console.log(user);
    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Pets & Supplies</NavLink></li>
                    {user && 
                        <>
                        <li><NavLink to='/addListings'>Add Listing</NavLink></li>
                        <li><NavLink to='/myListings'>My Listings</NavLink></li>
                        <li><NavLink to='/myOrders'>My Orders</NavLink></li>
                        </>
                    }
                </>

    const handleSignOut = () => {
        logOut().then().catch((error) => {console.log(error)});
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Paw Mart</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?<><img className='mr-4 rounded-full h-[50px]' src={user.photoURL} alt="" /> <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> </> :<> <Link to='/register'><a className="btn btn-primary mr-4">Register</a></Link> <Link to='/login'><a className="btn btn-primary">Login</a></Link> </> }
            </div>
        </div>
    );
};

export default NavBar;
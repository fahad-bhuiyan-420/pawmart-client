import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = use(AuthContext);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Pets & Supplies</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                </>
            )}
        </>
    );

    const handleSignOut = () => {
        logOut().catch(error => console.log(error));
    };

    return (
        <div className="navbar bg-base-100 shadow-md px-4">

            {/* ===== Left Section ===== */}
            <div className="navbar-start">

                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
                    >
                        {links}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 ml-2">
                    <span className="text-2xl font-bold text-orange-500">
                        PawMart
                    </span>
                </Link>
            </div>

            {/* ===== Center Section ===== */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {links}
                </ul>
            </div>

            {/* ===== Right Section ===== */}
            <div className="navbar-end gap-3">
                {user ? (
                    <>
                        <img
                            className="rounded-full w-10 h-10 object-cover border"
                            src={user.photoURL}
                            alt="User"
                        />
                        <button
                            onClick={handleSignOut}
                            className="btn btn-primary rounded-full px-5"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn btn-outline btn-primary rounded-full">
                            Register
                        </Link>
                        <Link to="/login" className="btn btn-primary rounded-full">
                            Login
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;

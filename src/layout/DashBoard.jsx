import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open bg-slate-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-content flex flex-col">
                {/* Navbar matching PawMart style */}
                <nav className="navbar w-full bg-base-100 shadow-sm border-b px-4 lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 font-bold text-orange-500">PawMart Dashboard</div>
                </nav>

                {/* Page content */}
                <main className="p-6 md:p-10">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            <div className="drawer-side z-40">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                
                <div className="flex min-h-full flex-col bg-white border-r w-72">
                    {/* Brand Logo Section */}
                    <div className="p-6 mb-2">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-orange-100 p-2 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.43 1.39.41 2.45 3.39 1.39 5.59-.3.62-.73 1.17-1.24 1.62C21.61 12 22 13.06 22 14c0 4.42-4.48 8-10 8S2 18.42 2 14c0-.94.39-2 1.43-3.96-.51-.45-.94-1-1.24-1.62-1.06-2.2 0-5.18 1.39-5.59 1.39-.41 4.64.43 6.42 2.43.65-.17 1.33-.26 2-.26Z"/><circle cx="8" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><path d="M10 15c.5.5 1 1 2 1s1.5-.5 2-1"/></svg>
                            </div>
                            <span className="text-2xl font-black text-orange-500 tracking-tight">PawMart</span>
                        </Link>
                    </div>

                    {/* Sidebar Links */}
                    <ul className="menu menu-md px-4 grow gap-2 text-base-content/70">
                        <li>
                            <NavLink to="/" end className={({ isActive }) => isActive ? "!bg-orange-50 !text-orange-600 font-bold" : "hover:text-orange-500"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                Back to Home
                            </NavLink>
                        </li>

                        <div className="divider px-4 opacity-40 text-xs uppercase font-bold tracking-widest">Store Management</div>

                        <li>
                            <NavLink to="add-listing" className={({ isActive }) => isActive ? "!bg-orange-50 !text-orange-600 font-bold" : "hover:text-orange-500"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
                                Add New Listing
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="my-listing" className={({ isActive }) => isActive ? "!bg-orange-50 !text-orange-600 font-bold" : "hover:text-orange-500"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="14" cy="20" r="2"/><circle cx="7" cy="20" r="2"/><circle cx="4" cy="16" r="2"/><circle cx="6" cy="8" r="2"/><path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/></svg>
                                My Pet Inventory
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="my-orders" className={({ isActive }) => isActive ? "!bg-orange-50 !text-orange-600 font-bold" : "hover:text-orange-500"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                                Adoption Orders
                            </NavLink>
                        </li>
                    </ul>

                    {/* Sidebar Bottom Profile (Optional) */}
                    <div className="p-4 bg-orange-50 m-4 rounded-2xl flex items-center gap-3">
                        <div className="avatar online placeholder">
                            <div className="bg-orange-500 text-white rounded-full w-10">
                                <span className="text-xs">PM</span>
                            </div>
                        </div>
                        <div className="text-sm">
                            <p className="font-bold text-orange-900 leading-tight">Admin Panel</p>
                            <p className="text-orange-700/70 text-[10px]">PawMart Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
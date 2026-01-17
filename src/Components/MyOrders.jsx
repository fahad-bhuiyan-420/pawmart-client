import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import { FaBoxOpen, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const MyOrders = () => {
    const { user } = use(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        axios.get(`https://pawmart-server-rho.vercel.app/orders?email=${user.email}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => console.error("Error fetching orders:", err));
    }, [user?.email]);

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-2 flex justify-center items-center gap-3">
                        My Orders <FaBoxOpen className="text-orange-400" />
                    </h1>
                    <p className="text-gray-600">Track your recent purchases and pet adoptions from PawMart</p>
                </div>

                {/* Table Container */}
                <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* Table Head */}
                            <thead className="bg-orange-500 text-white text-lg">
                                <tr>
                                    <th className="rounded-tl-none">#</th>
                                    <th>Product Information</th>
                                    <th>Buyer Details</th>
                                    <th>Shipping Info</th>
                                    <th>Order Date</th>
                                    <th className="text-center">Total Price</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-orange-50 transition-colors duration-200 border-b border-gray-100">
                                        <th className="text-gray-400 font-bold">{index + 1}</th>
                                        
                                        {/* Product Info */}
                                        <td>
                                            <div className="flex flex-col">
                                                <div className="font-bold text-xl text-gray-800">{item.product}</div>
                                                <div className="flex items-center gap-2 text-sm text-orange-600 font-medium mt-1">
                                                    <span className="badge badge-sm badge-outline badge-warning">Qty: {item.quantity}</span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Buyer Details */}
                                        <td>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 font-semibold text-gray-700">
                                                    <FaUser className="text-orange-400 size-3" /> {item.name}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <FaPhoneAlt className="text-gray-400 size-3" /> {item.phone}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Shipping Info */}
                                        <td>
                                            <div className="flex items-center gap-2 max-w-xs">
                                                <FaMapMarkerAlt className="text-red-400 shrink-0" />
                                                <span className="text-sm text-gray-600 italic">{item.address}</span>
                                            </div>
                                        </td>

                                        {/* Date */}
                                        <td>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <FaCalendarAlt className="text-blue-400" />
                                                <span className="text-sm">{item.date}</span>
                                            </div>
                                        </td>

                                        {/* Total Price */}
                                        <td className="text-center">
                                            <div className="text-2xl font-black text-orange-600">
                                                ৳ {item.price}
                                            </div>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-green-500">Paid</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Empty State */}
                {data.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-20 opacity-60">
                        <div className="text-8xl mb-4 text-orange-200">🛒</div>
                        <h2 className="text-2xl font-bold text-gray-400">No orders found yet!</h2>
                        <button className="btn btn-warning mt-4 rounded-full px-8 text-white">Start Shopping</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaTag, FaMapMarkerAlt } from 'react-icons/fa';

const MyListings = () => {
    const { user, data, setData, loader } = use(AuthContext);

    useEffect(() => {
        if (loader || !user?.email) return;
        axios.get(`https://pawmart-server-rho.vercel.app/products?email=${user.email}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [user, loader, setData]);

    const handleUpdate = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const updatedData = {
            name: form.name.value,
            category: form.category.value,
            price: form.price.value,
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            date: form.date.value,
            email: user.email,
        };

        axios.patch(`https://pawmart-server-rho.vercel.app/products/${id}`, updatedData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Listing details updated successfully.",
                        icon: "success",
                        confirmButtonColor: "#f97316"
                    });
                    // Refresh data
                    const updatedList = data.map(item => item._id === id ? { ...item, ...updatedData } : item);
                    setData(updatedList);
                    document.getElementById(`modal_${id}`).close();
                }
            })
            .catch(err => console.error(err));
    };

    const deleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f97316",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://pawmart-server-rho.vercel.app/products/${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your listing has been removed.", "success");
                        setData(data.filter(item => item._id !== id));
                    });
            }
        });
    };

    return (
        <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-orange-500 mb-2">My PawMart Listings 🐾</h1>
                    <p className="text-gray-600">Manage and update the products or pets you've shared with the community.</p>
                </div>

                {/* Table Container */}
                <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead className="bg-orange-500 text-white text-lg">
                                <tr>
                                    <th className="rounded-tl-none">#</th>
                                    <th>Product Details</th>
                                    <th>Category & Price</th>
                                    <th>Location</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item._id} className="hover:bg-orange-50 transition-colors duration-200">
                                        <th className="font-bold text-gray-400">{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-4">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16 shadow-md">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-lg text-gray-800">{item.name}</div>
                                                    <div className="text-sm opacity-60 line-clamp-1 max-w-xs">{item.description}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex flex-col">
                                                <span className="badge badge-outline badge-warning font-medium mb-1">{item.category}</span>
                                                <span className="font-bold text-orange-600 text-lg">৳ {item.price}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <FaMapMarkerAlt className="text-orange-400" />
                                                {item.location}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-center gap-3">
                                                {/* Update Button */}
                                                <button 
                                                    className="btn btn-circle btn-ghost text-blue-500 hover:bg-blue-100 hover:scale-110 transition-all"
                                                    onClick={() => document.getElementById(`modal_${item._id}`).showModal()}
                                                >
                                                    <FaEdit size={20} />
                                                </button>

                                                {/* Delete Button */}
                                                <button 
                                                    onClick={() => deleteItem(item._id)}
                                                    className="btn btn-circle btn-ghost text-red-500 hover:bg-red-100 hover:scale-110 transition-all"
                                                >
                                                    <FaTrashAlt size={20} />
                                                </button>
                                            </div>

                                            {/* Update Modal */}
                                            <dialog id={`modal_${item._id}`} className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box bg-base-100 rounded-2xl border-t-8 border-orange-500">
                                                    <h3 className="font-bold text-2xl text-orange-500 mb-4 flex items-center gap-2">
                                                        <FaEdit /> Edit Listing
                                                    </h3>
                                                    <form onSubmit={(e) => handleUpdate(e, item._id)} className="space-y-4">
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div className="form-control">
                                                                <label className="label font-semibold">Product Name</label>
                                                                <input type="text" name='name' defaultValue={item.name} className="input input-bordered focus:border-orange-500" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label font-semibold">Category</label>
                                                                <input type="text" name='category' defaultValue={item.category} className="input input-bordered focus:border-orange-500" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label font-semibold">Price</label>
                                                                <input type="number" name='price' defaultValue={item.price} className="input input-bordered focus:border-orange-500" required />
                                                            </div>
                                                            <div className="form-control">
                                                                <label className="label font-semibold">Location</label>
                                                                <input type="text" name='location' defaultValue={item.location} className="input input-bordered focus:border-orange-500" required />
                                                            </div>
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label font-semibold">Image URL</label>
                                                            <input type="text" name='image' defaultValue={item.image} className="input input-bordered focus:border-orange-500" required />
                                                        </div>
                                                        <div className="form-control">
                                                            <label className="label font-semibold">Description</label>
                                                            <textarea name='description' defaultValue={item.description} className="textarea textarea-bordered h-24 focus:border-orange-500" required />
                                                        </div>
                                                        <input type="hidden" name="date" defaultValue={item.date} />
                                                        
                                                        <div className="modal-action">
                                                            <button type="submit" className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-full px-8">Save Changes</button>
                                                            <button type="button" className="btn btn-ghost" onClick={() => document.getElementById(`modal_${item._id}`).close()}>Cancel</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </dialog>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {data.length === 0 && (
                    <div className="text-center mt-20">
                        <div className="text-6xl mb-4">Empty 🐶</div>
                        <p className="text-gray-500 text-xl">You haven't added any listings yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyListings;
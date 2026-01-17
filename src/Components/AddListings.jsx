import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddListings = () => {
    const today = new Date().toISOString().split("T")[0];
    const { user } = use(AuthContext);

    const handleListings = (e) => {
        e.preventDefault();

        const form = e.target;
        const newData = {
            name: form.name.value,
            category: form.category.value,
            price: form.price.value,
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            email: form.email.value,
            date: form.date.value,
        };

        axios.post('https://pawmart-server-rho.vercel.app/products', newData)
            .then(res => {
                // Check if the post was successful
                if (res.data.insertedId || res.status === 200) {
                    Swal.fire({
                        title: "Success!",
                        text: "Product added to PawMart 🐾",
                        icon: "success",
                        confirmButtonColor: "#f97316", // Orange theme
                    });
                    form.reset(); // Clears the form for the next entry
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error"
                });
            });
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl bg-base-100 rounded-2xl shadow-xl p-8">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-orange-500">
                        Add a New Listing 🐾
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Share pets, food, accessories, or care products with PawMart users
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleListings} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                        <label className="label font-semibold">Product Name</label>
                        <input type="text" name="name" className="input input-bordered w-full" placeholder="e.g. Golden Retriever" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Category</label>
                        <select name="category" className="select select-bordered w-full" required>
                            <option value="">Select Category</option>
                            <option value="Pet">Pet (Adoption)</option>
                            <option value="Food">Pet Food</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Care">Pet Care</option>
                        </select>
                    </div>

                    <div>
                        <label className="label font-semibold">Price</label>
                        <input type="number" name="price" className="input input-bordered w-full" placeholder="৳ Price" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="City / Area" required />
                    </div>

                    <div>
                        <label className="label font-semibold">Date</label>
                        <input type="text" name="date" value={today} readOnly className="input input-bordered w-full" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label font-semibold">Image URL</label>
                        <input type="text" name="image" className="input input-bordered w-full" placeholder="https://image-link.jpg" required />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label font-semibold">Description</label>
                        <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Short description..." rows="3" required />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label font-semibold">Your Email</label>
                        <input type="email" name="email" value={user?.email || ''} readOnly className="input input-bordered w-full" />
                    </div>

                    <div className="md:col-span-2">
                        <button type="submit" className="btn btn-primary w-full rounded-full text-lg bg-orange-500 border-none hover:bg-orange-600">
                            Submit Listing 🚀
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddListings;
import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddListings = () => {
    const today = new Date().toISOString().split("T")[0];
    const {user} = use(AuthContext);
    const handleListings = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const imageURL = e.target.image.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        console.log(name, category, price, location, description, imageURL, date, email)

        const newData = {
            name: name,
            category: category,
            price: price,
            location: location,
            description: description,
            image: imageURL,
            email: email,
            date: date,
        }


        axios.post('https://pawmart-server-rho.vercel.app/products', newData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleListings} className="card-body">
                            <h1 className="text-5xl font-bold">Add Listings</h1>
                            <fieldset className="fieldset">
                                <label className="label">Product name</label>
                                <input type="text" name='name' className="input" placeholder="Product Name" />
                                {/* Category */}
                                <label className="label">Category</label>
                                <input type="text" name='category' className="input" placeholder="Category" />
                                {/* Price */}
                                <label className="label">Price</label>
                                <input type="number" name='price' className="input" placeholder="Price" />
                                {/* location */}
                                <label className="label">Location</label>
                                <input type="text" name='location' className="input" placeholder="Location" />
                                {/* Description */}
                                <label className="label">Description</label>
                                <input type="text" name='description' className="input" placeholder="Description" />
                                {/* Image */}
                                <label className="label">Image</label>
                                <input type="text" name='image' className="input" placeholder="Image URL" />
                                {/* Date */}
                                <label className="label">Date</label>
                                    <input type="text" value={today} name='date' className="input w-full" placeholder="Date" readOnly />
                                {/* Email */}
                                <label className="label">Email</label>
                                <input type="email" name='email' value={user.email} className="input w-full" placeholder="Email" readOnly />

                                <button className="btn btn-neutral mt-4">Submit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

};
    export default AddListings;
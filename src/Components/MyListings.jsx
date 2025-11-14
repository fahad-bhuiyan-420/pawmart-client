import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { user, data, setData, loader } = use(AuthContext);
    useEffect(() => {

        if (loader) return;

        axios.get(`http://localhost:3000/products?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setData(res.data);
            })
    }, [user]);

    const handleListings = (e, id) => {
        e.preventDefault();
        const name = e.target.name.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const imageURL = e.target.image.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        console.log(name, category, price, location, description, imageURL, date, email, id)

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

        axios.patch(`http://localhost:3000/products/${id}`, newData)
            .then(res => {
                console.log("Updated successfully:", res.data);

                axios.get(`http://localhost:3000/products?email=${user.email}`)
                    .then(res => {
                        console.log(res.data)
                        setData(res.data);
                    })
            })
            .catch(err => {
                console.error("Error updating product:", err);
            });




    }

    const deleteItem = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                axios.delete(`http://localhost:3000/products/${id}`)
                    .then(res => {
                        console.log("Updated successfully:", res.data);

                        const afterDelete = data.filter(item => item._id != id);
                        setData(afterDelete);
                    })
                    .catch(err => {
                        console.error("Error updating product:", err);
                    });
            }
        });


    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                { }
                            </th>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {data.map((item, index) => <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-xl'>
                                {item.description}
                            </td>
                            <td className='text-xl'>{item.category}</td>
                            <td className='text-xl'>
                                {item.price}
                            </td>
                            <td className='text-xl'>{item.email}</td>
                            <td>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <form onSubmit={(e) => handleListings(e, item._id)} className="card-body">
                                            <fieldset className="fieldset">
                                                <label className="label">Product name</label>
                                                <input type="text" name='name' className="input w-full" placeholder="Product Name" />
                                                {/* Category */}
                                                <label className="label">Category</label>
                                                <input type="text" name='category' className="input w-full" placeholder="Category" />
                                                {/* Price */}
                                                <label className="label">Price</label>
                                                <input type="number" name='price' className="input w-full" placeholder="Price" />
                                                {/* location */}
                                                <label className="label">Location</label>
                                                <input type="text" name='location' className="input w-full" placeholder="Location" />
                                                {/* Description */}
                                                <label className="label">Description</label>
                                                <input type="text" name='description' className="input w-full" placeholder="Description" />
                                                {/* Image */}
                                                <label className="label">Image</label>
                                                <input type="text" name='image' className="input w-full" placeholder="Image URL" />
                                                {/* Date */}
                                                <label className="label">Date</label>
                                                <input type="date" name='date' className="input w-full" placeholder="Date" />
                                                {/* Email */}
                                                <label className="label">Email</label>
                                                <input type="email" name='email' value={user.email} className="input w-full" placeholder="Email" readOnly />

                                                <button className="btn btn-neutral mt-4">Submit</button>
                                            </fieldset>
                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </td>
                            <td><button onClick={() => deleteItem(item._id)} className='btn'>x</button></td>
                        </tr>
                    </tbody>)}

                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyListings;
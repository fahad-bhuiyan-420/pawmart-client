import { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const ProductDetails = () => {
    const {user} = use(AuthContext);
    const { id } = useParams();

    const data = useLoaderData();
    const newData = data.find(product => product._id == id);

    const today = new Date().toISOString().split("T")[0];

    const handleOrder = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const product = e.target.productName.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value * quantity;
        const address = e.target.address.value;
        const date = e.target.date.value;
        const phone = e.target.phone.value;

        const newData = {
            name: name,
            email: email,
            product: product,
            quantity: quantity,
            price: price,
            address: address,
            date: date,
            phone: phone
        }

        axios.post(`https://pawmart-server-rho.vercel.app/orders`, newData)
    }

    return (
        <div>
            <h3 className="text-4xl text-center font-bold my-10">Product Details</h3>
            <div className="card lg:card-side bg-base-100 shadow-sm">

                <figure>
                    <img
                        className="w-full h-[300px]"
                        src={newData.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Name: {newData.name}</h2>
                    <h3 className="text-2xl "><span className="font-bold">Price:</span> {newData.price}</h3>
                    <h3 className="text-2xl "><span className="font-bold">Location:</span> {newData.location}</h3>
                    <h3 className="text-2xl "><span className="font-bold">Category:</span> {newData.category}</h3>
                    <p className="py-6 text-2xl">
                        <span className="font-bold">Description:</span> {newData.description}
                    </p>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary w-3/9 text-xl" onClick={() => document.getElementById('my_modal_5').showModal()}>Adopt / Order</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleOrder}  className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Buyer name</label>
                                    <input type="text" name='name' value={user.displayName} className="input w-full" placeholder="Buyer Name" readOnly />
                                    {/* Email */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' value={user.email} className="input w-full" placeholder="Email" readOnly />
                                    {/* Product Name */}
                                    <label className="label">Product Name</label>
                                    <input type="text" name='productName' value={newData.name} className="input w-full" placeholder="Product Name" readOnly />
                                    {/* Quantity */}
                                    <label className="label">Quantity</label>
                                    {newData.category == "Pets" ? <input type="number" value='1' name='quantity' className="input w-full" placeholder="Quantity" readOnly /> : <input type="number" name='quantity' className="input w-full" placeholder="Quantity" />}
                                    {/* Price */}
                                    <label className="label">Price</label>
                                    <input type="text" name='price' value={newData.price } className="input w-full" placeholder="Price" readOnly />
                                    {/* Address */}
                                    <label className="label">Address</label>
                                    <input type="text" name='address' className="input w-full" placeholder="Address" />
                                    {/* Date */}
                                    <label className="label">Date</label>
                                    <input type="text" value={today} name='date' className="input w-full" placeholder="Date" readOnly />
                                    {/* Phone */}
                                    <label className="label">Phone</label>
                                    <input type="number" name='phone' className="input w-full" placeholder="Phone" />
                                    
                                    

                                    <button className="btn btn-neutral mt-4">Order</button>
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
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
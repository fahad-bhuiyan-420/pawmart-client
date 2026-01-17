import { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { FaMapMarkerAlt, FaTag, FaInfoCircle, FaPaw } from "react-icons/fa";
import Swal from "sweetalert2"; // Recommended for feedback

const ProductDetails = () => {
    const { user } = use(AuthContext);
    const { id } = useParams();
    const data = useLoaderData();
    const newData = data.find(product => product._id == id);

    const today = new Date().toISOString().split("T")[0];

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const product = form.productName.value;
        const quantity = form.quantity.value;
        const price = newData.price * quantity; // Calculate total price
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;

        const orderInfo = {
            name, email, product, quantity, price, address, date, phone,
            image: newData.image,
            productId: newData._id
        };

        axios.post(`https://pawmart-server-rho.vercel.app/orders`, orderInfo)
            .then(res => {
                if (res.data.insertedId) {
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your order has been placed successfully.',
                        confirmButtonColor: '#f97316'
                    });
                }
            })
            .catch(error => console.error(error));
    };

    if (!newData) return <div className="text-center py-20 text-2xl font-bold">Product not found.</div>;

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4 md:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl border border-orange-50">
                    
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            className="w-full h-full object-cover min-h-[400px]"
                            src={newData.image}
                            alt={newData.name} />
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
                            <FaPaw /> {newData.category}
                        </div>
                        
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{newData.name}</h2>
                        
                        <div className="text-3xl font-bold text-orange-500 mb-6">
                            ${newData.price}
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaMapMarkerAlt className="text-orange-400" />
                                <span className="text-lg"><strong>Location:</strong> {newData.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <FaTag className="text-orange-400" />
                                <span className="text-lg"><strong>Category:</strong> {newData.category}</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-600">
                                <FaInfoCircle className="text-orange-400 mt-1" />
                                <p className="text-lg leading-relaxed">
                                    <strong>Description:</strong> {newData.description}
                                </p>
                            </div>
                        </div>

                        <button 
                            className="btn btn-primary btn-lg rounded-full text-white shadow-lg hover:shadow-orange-200 transition-all border-none bg-orange-500 hover:bg-orange-600 w-full md:w-max px-10" 
                            onClick={() => document.getElementById('my_modal_5').showModal()}>
                            Adopt / Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 rounded-3xl overflow-hidden">
                    <div className="bg-orange-500 p-6 text-white text-center">
                        <h3 className="text-2xl font-bold">Complete Your Order</h3>
                        <p className="opacity-90">Confirm your details for {newData.name}</p>
                    </div>

                    <form onSubmit={handleOrder} className="p-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label font-semibold">Buyer Name</label>
                                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered focus:border-orange-500" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Email</label>
                                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered focus:border-orange-500" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Product</label>
                                <input type="text" name='productName' defaultValue={newData.name} className="input input-bordered focus:border-orange-500" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Quantity</label>
                                {newData.category === "Pets" ? 
                                    <input type="number" defaultValue='1' name='quantity' className="input input-bordered" readOnly /> : 
                                    <input type="number" name='quantity' defaultValue='1' min='1' className="input input-bordered focus:border-orange-500" required />
                                }
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Price (Unit)</label>
                                <input type="text" name='price' defaultValue={newData.price} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Date</label>
                                <input type="text" defaultValue={today} name='date' className="input input-bordered" readOnly />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">Phone Number</label>
                            <input type="tel" name='phone' className="input input-bordered focus:border-orange-500" placeholder="e.g. +1 234 567 890" required />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">Delivery Address</label>
                            <textarea name='address' className="textarea textarea-bordered focus:border-orange-500" placeholder="Enter your full address" required></textarea>
                        </div>

                        <div className="modal-action flex justify-end gap-3 mt-6">
                            <button type="button" className="btn btn-ghost" onClick={() => document.getElementById('my_modal_5').close()}>Cancel</button>
                            <button type="submit" className="btn btn-primary bg-orange-500 border-none px-8 text-white rounded-full">Confirm Order</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ProductDetails;
import React from 'react';
import { useNavigate } from 'react-router';

const CategoryDetails = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="group">
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">

                {/* Image */}
                <figure className="relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                </figure>

                {/* Content */}
                <div className="card-body p-5">
                    <h2 className="card-title text-lg font-bold text-gray-800">
                        {product.name}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-2">
                        {product.description}
                    </p>

                    <div className="mt-4">
                        <button
                            onClick={() => navigate(`/products/${product._id}`)}
                            className="btn btn-outline btn-primary rounded-full w-full"
                        >
                            View Details 🐾
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CategoryDetails;

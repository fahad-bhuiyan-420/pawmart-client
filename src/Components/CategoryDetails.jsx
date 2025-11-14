import React from 'react';
import { useNavigate } from 'react-router';

const CategoryDetails = ({product}) => {    
    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        className='w-full h-[200px]  rounded-2xl '
                        src={product.image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <div>
                        <button onClick={() => navigate(`/products/${product._id}`)} className="btn btn-outline">Show Details</button>
                    </div> 
                </div>
                
            </div>
        </div>
    );
};

export default CategoryDetails;
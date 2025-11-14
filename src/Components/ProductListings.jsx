import React from 'react';
import { useLoaderData } from 'react-router';
import CategoryDetails from './CategoryDetails';

const ProductListings = () => {
    const data = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                data.map(product => <CategoryDetails key={product._id} product={product}></CategoryDetails>)
            }
        </div>
    );
};

export default ProductListings;
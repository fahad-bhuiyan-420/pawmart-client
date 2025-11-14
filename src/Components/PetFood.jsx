import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import CategoryDetails from './CategoryDetails';

const PetFood = () => {
    const data = useLoaderData();
    const newData = data.filter(product => product.category === 'Pet Food');
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                newData.map(product => <CategoryDetails key={product._id} product={product}></CategoryDetails>)
            }
        </div>
    );
};

export default PetFood;
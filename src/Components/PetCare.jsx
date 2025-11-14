import React from 'react';
import { useLoaderData } from 'react-router';
import CategoryDetails from './CategoryDetails';

const PetCare = () => {
    const data = useLoaderData();
    const newData = data.filter(product => product.category === 'Pet Care Products');
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
            {
                newData.map(product => <CategoryDetails key={product._id} product={product}></CategoryDetails>)
            }
        </div>
    );
};

export default PetCare;
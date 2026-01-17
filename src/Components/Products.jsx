import React from 'react';
import { Outlet, useLoaderData } from 'react-router';

const Products = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Outlet data={data}></Outlet>
        </div>
    );
};

export default Products;
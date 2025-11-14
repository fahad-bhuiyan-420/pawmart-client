import React from 'react';
import Home from '../Components/Home';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';

const Root = () => {
    return (
        <div className='mx-10'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
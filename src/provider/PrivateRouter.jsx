import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loader} = use(AuthContext)
    const  location = useLocation();

    if (loader) {
       return <div>Loading...</div>
        
    }

    if (user) {
        return children
    }

    else{
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    
};

export default PrivateRouter;
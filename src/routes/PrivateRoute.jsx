import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import NotAuthorized from '../Components/NotAuthorized';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext);

    if (user) {
        return children
    }

    return <NotAuthorized></NotAuthorized>
};

export default PrivateRoute;
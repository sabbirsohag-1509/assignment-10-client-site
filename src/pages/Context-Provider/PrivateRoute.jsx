import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../components/Loading/Loading';


const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <span><Loading></Loading></span>
    }

    if (user) {
        return children;
    }
        

    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
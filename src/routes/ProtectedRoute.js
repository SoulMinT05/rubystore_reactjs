import React, { useEffect } from 'react';
import useAuth from '../custom-hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Link, Switch } from 'react-router-dom';

function ProtectedRoute() {
    const { currentUser } = useAuth();

    // useEffect(() => {
    //     if (currentUser) {
    //         toast.warning('You need to login!');
    //     }
    // });

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

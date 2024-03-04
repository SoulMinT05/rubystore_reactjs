import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Home from '../pages/Home/Home';
import AllOutfits from '../pages/AllOutfits/AllOutfits';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import OutfitDetails from '../pages/OutfitDetails/OutfitDetails';
import Cart from '../pages/Cart/Cart';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

import Dashboard from '../admin/Dashboard/Dashboard';
import AddProducts from '../admin/AddProducts/AddProducts';
import UpdateProducts from '../admin/UpdateProducts/UpdateProducts';
import AllProducts from '../admin/AllProducts/AllProducts';
import Users from '../admin/Users/Users';

import AddEditUser from '../admin/AddEditUser/AddEditUser';
import HomeUser from '../admin/HomeUser/HomeUser';

import ProtectedRoute from './ProtectedRoute';

const USER_TYPES = {
    PUBLIC: 'Public User',
    NORMAL_USER: 'Normal user',
    ADMIN_USER: 'Admin user',
};

const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

const Routers = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
                path="/home"
                element={
                    <PublicElement>
                        <Home />
                    </PublicElement>
                }
            />
            <Route
                path="/outfits"
                element={
                    <UserElement>
                        <AllOutfits />
                    </UserElement>
                }
            />
            <Route
                path="/outfits/:id"
                element={
                    <UserElement>
                        <OutfitDetails />
                    </UserElement>
                }
            />
            <Route
                path="/cart"
                element={
                    <UserElement>
                        <Cart />
                    </UserElement>
                }
            />

            <Route path="/*" element={<ProtectedRoute />}>
                <Route path="checkout" element={<Checkout />} />
                <Route
                    path="dashboard"
                    element={
                        <AdminElement>
                            <Dashboard />
                        </AdminElement>
                    }
                />
                <Route
                    path="dashboard/all-products"
                    element={
                        <AdminElement>
                            <AllProducts />
                        </AdminElement>
                    }
                />
                <Route
                    path="dashboard/add-products"
                    element={
                        <AdminElement>
                            <AddProducts />
                        </AdminElement>
                    }
                />
                <Route
                    path="dashboard/update-products/:id"
                    element={
                        <AdminElement>
                            <AddProducts />
                        </AdminElement>
                    }
                />

                <Route path="dashboard/add" element={<AddEditUser />} />
                <Route path="dashboard/update/:id" element={<AddEditUser />} />

                <Route path="dashboard/homeuser" element={<HomeUser />} />

                <Route
                    path="dashboard/users"
                    element={
                        <AdminElement>
                            <Users />
                        </AdminElement>
                    }
                />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

function PublicElement({ children }) {
    return <>{children}</>;
}

function UserElement({ children }) {
    //User not access to web of admin, not only to access to user
    if (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return <>{children}</>;
    } else {
        // User not access
        return <Navigate to="/" />;
        // return <div>User does not have access to this page</div>;
    }
}

function AdminElement({ children }) {
    //User not access to web of admin, not only to access to user
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return <>{children}</>;
    } else {
        return <div>You do not have access to this page</div>;
    }
}

export default Routers;

//Old
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import Home from '../pages/Home/Home';
// import AllOutfits from '../pages/AllOutfits/AllOutfits';
// import Checkout from '../pages/Checkout/Checkout';
// import Contact from '../pages/Contact/Contact';
// import OutfitDetails from '../pages/OutfitDetails/OutfitDetails';
// import Cart from '../pages/Cart/Cart';
// import Login from '../pages/Login/Login';
// import Register from '../pages/Register/Register';

// import Dashboard from '../admin/Dashboard/Dashboard';
// import AddProducts from '../admin/AddProducts/AddProducts';
// import UpdateProducts from '../admin/UpdateProducts/UpdateProducts';
// import AllProducts from '../admin/AllProducts/AllProducts';
// import Users from '../admin/Users/Users';

// import AddEditUser from '../admin/AddEditUser/AddEditUser';
// import HomeUser from '../admin/HomeUser/HomeUser';

// import ProtectedRoute from './ProtectedRoute';

// const Routers = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         // window.scrollTo(0, 0);
//         window.scroll({
//             top: 0,
//             behavior: 'smooth',
//         });
//     }, [pathname]);

//     return (
//         <Routes>
//             <Route path="/" element={<Navigate to="/home" />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/outfits" element={<AllOutfits />} />
//             <Route path="/outfits/:id" element={<OutfitDetails />} />
//             <Route path="/cart" element={<Cart />} />

//             <Route path="/*" element={<ProtectedRoute />}>
//                 <Route path="checkout" element={<Checkout />} />
//                 <Route path="dashboard" element={<Dashboard />} />
//                 <Route path="dashboard/all-products" element={<AllProducts />} />
//                 <Route path="dashboard/add-products" element={<AddProducts />} />
//                 <Route path="dashboard/update-products/:id" element={<AddProducts />} />

//                 <Route path="dashboard/add" element={<AddEditUser />} />
//                 <Route path="dashboard/update/:id" element={<AddEditUser />} />

//                 <Route path="dashboard/homeuser" element={<HomeUser />} />

//                 <Route path="dashboard/users" element={<Users />} />
//             </Route>

//             {/* <Route
//                 path="/checkout"
//                 element={
//                     <ProtectedRoute>
//                         <Checkout />
//                     </ProtectedRoute>
//                 }
//             /> */}

//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/contact" element={<Contact />} />
//         </Routes>
//     );
// };

// export default Routers;

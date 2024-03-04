import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routes from '../../routes/Routers';

import CartShopping from '../UI/Cart/CartShopping';
import AdminNav from '../../admin/AdminNav/AdminNav';

import { useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();

    const showCart = useSelector((state) => state.cartUi.cartIsVisible);
    return (
        <div>
            {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}

            {/* <Header /> */}
            {showCart && <CartShopping />}
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { cartUiActions } from '../../../store/shoppingCart/cartUiSlice';
import noItemAddedCart from '../../../assets/images/noItemAddedCart.png';
import '../../../styles/CartShopping.css';

function Cart() {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const toggleCartClose = () => {
        dispatch(cartUiActions.toggle());
    };
    const toggleCartWrapper = (e) => {
        e.stopPropagation();
    };
    return (
        <div className="cart__container" onClick={toggleCartClose}>
            <ListGroup className="cart" onClick={toggleCartWrapper}>
                <div className="cart__close">
                    <span onClick={toggleCartClose}>
                        <i className="ri-close-fill"></i>
                    </span>
                </div>
                <div className="cart__item-list">
                    {cartProducts.length === 0 ? (
                        <div className="noItemCart">
                            <img src={noItemAddedCart} alt="" />
                            <h6 className="text-center">No item added to the cart</h6>
                            <Link to="/outfits">
                                <button className="backToShop" onClick={toggleCartClose}>
                                    Back to Shop
                                </button>
                            </Link>
                        </div>
                    ) : (
                        cartProducts.map((item, index) => <CartItem item={item} key={index} />)
                    )}
                </div>
                <div className="d-flex align-items-center justify-content-between cart__total">
                    <h6 className="subtotal">Subtotal :</h6>
                    <span className="price">${totalAmount}</span>
                </div>
                <div className="cart__bottom">
                    <button className="button__viewcart" onClick={toggleCartClose}>
                        <Link to="/cart">View cart</Link>
                    </button>
                    <button className="button__checkout" onClick={toggleCartClose}>
                        <Link to="/checkout">Checkout</Link>
                    </button>
                </div>
                <span className="cart__text">Free shipping on All Orders Over $100!</span>
            </ListGroup>
        </div>
    );
}

export default Cart;

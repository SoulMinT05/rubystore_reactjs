import React from 'react';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';

import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import noItemAddedCart from '../../assets/images/noItemAddedCart.png';
import { cartActions } from '../../store/shoppingCart/cartSlice';

import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    return (
        <Helmet title="Cart">
            <CommonSection title="Your Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            {cartItems.length === 0 ? (
                                <div className="noItemCart">
                                    <img src={noItemAddedCart} alt="" />
                                    <h6 className="text-center">No item added to the cart</h6>
                                    <Link to="/outfits">
                                        <button className={cx('backToShop')}>Back to Shop</button>
                                    </Link>
                                </div>
                            ) : (
                                <div>
                                    <table className={cx('table-bordered table')}>
                                        <thead>
                                            <tr>
                                                <th className={cx('table-info')}>Image</th>
                                                <th className={cx('table-info')}>Title</th>
                                                <th className={cx('table-info')}>Price</th>
                                                <th className={cx('table-info')}>Quantity</th>
                                                <th className={cx('table-info')}>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <Tr item={item} key={item.id} />
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className={cx('shopping__btn')}>
                                        <Link to="/outfits">
                                            <button className={cx('addToCart__btn-shopping')}>Continue Shopping</button>
                                        </Link>
                                    </div>
                                    <div className={cx('checkout__btn')}>
                                        <h3>Cart total</h3>
                                        <table className="w-100">
                                            <tbody>
                                                <tr className={cx('checkout__tr')}>
                                                    <td className={cx('td__first')}>Cart Subtotal</td>
                                                    <td className={cx('td__second')}>
                                                        <span>${totalAmount}</span>
                                                    </td>
                                                </tr>
                                                <tr className={cx('checkout__tr')}>
                                                    <td className={cx('td__first')}>Shipping and Handing </td>
                                                    <td className={cx('td__second')}>
                                                        <span>$0</span>
                                                    </td>
                                                </tr>
                                                <tr className={cx('checkout__tr')}>
                                                    <td className={cx('td__first')}>Vat</td>
                                                    <td className={cx('td__second')}>
                                                        <span>$0</span>
                                                    </td>
                                                </tr>
                                                <tr className={cx('checkout__tr')}>
                                                    <td className={cx('td__first')}>
                                                        <h6 className={cx('checkout__total')}>Order total</h6>
                                                    </td>
                                                    <td className={cx('td__second')}>
                                                        <span className={cx('checkout__total')}>${totalAmount}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="/checkout">
                                            <button className={cx('addToCart__btn-checkout')}>
                                                Proceed to checkout
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

const Tr = (props) => {
    const { id, imgUrl, title, price, quantity, totalPrice } = props.item;
    const dispatch = useDispatch();

    const increaseItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                imgUrl,
            }),
        );
    };

    const decreaseItem = () => {
        dispatch(cartActions.subtractItem(id));
    };
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };
    const number = { totalPrice };
    const roundedNumber = Math.round(number * 1000) / 1000;
    const formattedNumber = roundedNumber.toFixed(3);
    return (
        <tr>
            <td className={cx('cart__img-box')}>
                <img src={imgUrl} alt="" />
            </td>
            <td className={cx('cart__item-info')}>{title}</td>
            <td className={cx('cart__item-price')}>${totalPrice}</td>
            <td className={cx('cart__item-info')}>
                <div className={cx('buy__products-btns')}>
                    <button className={cx('decrease__btn')} onClick={decreaseItem}>
                        <i className="ri-subtract-line"></i>
                    </button>
                    <button className={cx('quantity')}>{quantity}</button>
                    <button className={cx('increase__btn')} onClick={increaseItem}>
                        <i className="ri-add-line"></i>
                    </button>
                </div>
            </td>
            <td className={cx('cart__item-del')}>
                <i className="ri-delete-bin-line" onClick={deleteItem}></i>
            </td>
        </tr>
    );
};

export default Cart;

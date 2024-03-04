import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../../store/shoppingCart/cartSlice';

import '../../../styles/CartItem.css';

function CartItem({ item }) {
    const { id, title, price, imgUrl, quantity, totalPrice } = item;

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

    return (
        //Use list-group-item instead of ListGroupItem,and had css styles of LGI
        <div className="list-product cart__item">
            <div className="cart__item-info d-flex gap-2">
                <img src={imgUrl} alt="product-img" />
                <div className="w-100 d-flex align-items-center gap-4 justify-content-between cart__product-info">
                    <div>
                        <h6 className="cart__product-title">{title}</h6>
                        <p className="d-flex align-items-center gap-5 cart__product-price">
                            {quantity}x <span>${totalPrice}</span>
                        </p>
                        <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                            <span className="increase__btn" onClick={increaseItem}>
                                <i className="ri-add-line"></i>
                            </span>
                            <span className="quantity">{quantity}</span>
                            <span className="decrease__btn" onClick={decreaseItem}>
                                <i className="ri-subtract-line"></i>
                            </span>
                        </div>
                    </div>
                    <span className="delete__btn" onClick={deleteItem}>
                        <i className="ri-close-line"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;

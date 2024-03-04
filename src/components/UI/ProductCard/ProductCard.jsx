import React from 'react';
import { Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { cartActions } from '../../../store/shoppingCart/cartSlice';
import '../../../styles/ProductCard.css';

// function ProductCard(props) {
//     const { id, title, imgUrl, price, priceOriginal } = props.item;
//     const dispatch = useDispatch();

//     const addToCart = () => {
//         dispatch(
//             cartActions.addItem({
//                 id,
//                 title,
//                 imgUrl,
//                 price,
//             }),
//         );
//         console.log('Pressed!');
//         toast.success('Product added successfully');
//     };

//     return (
//         <div className="product__item">
//             <Link to={`/outfits/${id}`}>
//                 <div className="product__img">
//                     <img src={imgUrl} alt="product-img" />
//                 </div>
//                 <div className="product__content">
//                     <h5 className="product__title">{title}</h5>
//                     <div className="d-flex align-items-center justify-content-center gap-2 product__price">
//                         <span className="product__priceSale">${price}</span>
//                         <span className="product__priceOriginal">${priceOriginal}</span>
//                     </div>
//                 </div>
//             </Link>
//             <button className="addToCart__btn" onClick={addToCart}>
//                 Add to Cart
//             </button>
//         </div>
//     );
// }

function ProductCard({ item }) {
    // const { id, title, imgUrl, price, priceOriginal } = item;

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id: item.id,
                title: item.title,
                imgUrl: item.imgUrl,
                price: item.price,
            }),
        );
        console.log('Item: ', item);
        toast.success('Product added successfully');
    };

    return (
        <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
            <div className="product__item">
                <Link to={`/outfits/${item.id}`}>
                    {/* <a href={`/outfits/${item.id}`}> */}
                    <div className="product__img">
                        <img src={item.imgUrl} alt="product-img" />
                    </div>
                    <div className="product__content">
                        <h5 className="product__title">{item.title}</h5>
                        <div className="d-flex align-items-center justify-content-center gap-2 product__price">
                            <span className="product__priceSale">${item.price}</span>
                            <span className="product__priceOriginal">${item.priceOriginal}</span>
                        </div>
                    </div>
                    {/* </a> */}
                </Link>
                <button className="addToCart__btn" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </Col>
    );
}

export default ProductCard;

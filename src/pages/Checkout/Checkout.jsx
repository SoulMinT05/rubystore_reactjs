// import React, { useEffect, useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row, Col } from 'reactstrap';
// import { Link } from 'react-router-dom';

// import cartSlice from '../../store/shoppingCart/cartSlice';
// import CommonSection from '../../components/UI/CommonSection/CommonSection';
// import Helmet from '../../components/Helmet/Helmet';
// import paypalImg from '../../assets/images/paypal.png';

// import classNames from 'classnames/bind';
// import styles from './Checkout.module.scss';

// const cx = classNames.bind(styles);
// const Checkout = () => {
//     const [enterName, setEnterName] = useState('');
//     const [enterEmail, setEnterEmail] = useState('');
//     const [enterNumber, setEnterNumber] = useState('');
//     const [enterCountry, setEnterCountry] = useState('');
//     const [enterCity, setEnterCity] = useState('');
//     const [postalCode, setPostalCode] = useState('');

//     const shippingInfo = [];

//     const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
//     const shippingCost = 5;

//     const totalAmount = cartTotalAmount + Number(shippingCost);

//     const navigate = useNavigate();

//     // if (totalAmount > 100) {
//     //     shippingCost = 0;
//     // }
//     // useEffect(() => {
//     //     if (totalAmount > 100) {
//     //         shippingCost = 0;
//     //     }
//     // });

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const userShippingAddress = {
//             name: enterName,
//             email: enterEmail,
//             phone: enterNumber,
//             country: enterCountry,
//             city: enterCity,
//             postalCode: postalCode,
//         };
//         shippingInfo.push(userShippingAddress);
//         console.log(shippingInfo);

//         alert('Payment successfully!');
//         // xoá số sp đã mua trong local storage
//         localStorage.clear();
//         //load lại trang
//         window.location.reload();
//     };

//     return (
//         <Helmet title="Checkout">
//             <CommonSection title="Checkout" />
//             <section>
//                 <Container>
//                     <Row>
//                         <h6 className={cx('billing__details')}>Billing Details</h6>

//                         <Col lg="6" md="12">
//                             <div className={cx('payment__method')}>
//                                 <h4>Payment method</h4>
//                                 <div className="w-100">
//                                     <div>
//                                         <div className={cx('payment__item')}>
//                                             <label htmlFor="Check payments">
//                                                 <input
//                                                     name="paymentmethod"
//                                                     type="radio"
//                                                     id="Check payments"
//                                                     value="Check payments"
//                                                 />
//                                                 <span>Check payments</span>
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className={cx('payment__item')}>
//                                             <label htmlFor="Cash on delivery">
//                                                 <input
//                                                     name="paymentmethod"
//                                                     type="radio"
//                                                     id="Cash on delivery"
//                                                     value="Cash on delivery"
//                                                 />
//                                                 <span>Cash on delivery</span>
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <div className={cx('payment__item-last')}>
//                                             <label htmlFor="Paypal">
//                                                 <input name="paymentmethod" type="radio" id="Paypal" value="Paypal" />
//                                                 <span>Paypal</span>
//                                                 <img src={paypalImg} alt="" />
//                                             </label>
//                                         </div>
//                                     </div>
//                                     <div className={cx('place__order')}>
//                                         <p>
//                                             Your personal data will be used to process your order, support your
//                                             experience throughout this website, and for other purposes described in our
//                                             privacy policy.
//                                         </p>
//                                         {/* <button
//                                             type="submit"
//                                             className={cx('addToCart__btn-payment')}
//                                         >
//                                             Place order
//                                         </button> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col lg="6" md="12" className={cx('total__col')}>
//                             <div className={cx('checkout__btn')}>
//                                 <h3>Cart total</h3>
//                                 <table className="w-100">
//                                     <tbody>
//                                         <tr className={cx('checkout__tr')}>
//                                             <td>Cart Subtotal</td>
//                                             <td>
//                                                 <span>${cartTotalAmount}</span>
//                                             </td>
//                                         </tr>
//                                         <tr className={cx('checkout__tr')}>
//                                             <td>Shipping and Handing </td>
//                                             <td>
//                                                 <span>${shippingCost}</span>
//                                             </td>
//                                         </tr>
//                                         <tr className={cx('checkout__tr')}>
//                                             <td>Vat</td>
//                                             <td>
//                                                 <span>$0</span>
//                                             </td>
//                                         </tr>
//                                         <tr className={cx('checkout__tr')}>
//                                             <td>
//                                                 <h6 className={cx('checkout__total')}>Order total</h6>
//                                             </td>
//                                             <td>
//                                                 <span className={cx('checkout__total')}>${totalAmount}</span>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </Col>
//                         <form className={cx('checkout__form')} onSubmit={submitHandler}>
//                             <h3>Personal information</h3>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your name"
//                                     required
//                                     onChange={(e) => setEnterName(e.target.value)}
//                                 />
//                             </div>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter your email"
//                                     required
//                                     onChange={(e) => setEnterEmail(e.target.value)}
//                                 />
//                             </div>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="number"
//                                     placeholder="Phone number"
//                                     onChange={(e) => setEnterNumber(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="text"
//                                     placeholder="Country"
//                                     onChange={(e) => setEnterCountry(e.target.value)}
//                                 />
//                             </div>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="text"
//                                     placeholder="City"
//                                     required
//                                     onChange={(e) => setEnterCity(e.target.value)}
//                                 />
//                             </div>
//                             <div className={cx('form__group')}>
//                                 <input
//                                     type="number"
//                                     placeholder="Postal code"
//                                     onChange={(e) => setPostalCode(e.target.value)}
//                                 />
//                             </div>
//                             {/* <button type="submit" className={cx('addToCart__btn-payment')}>
//                                 Place order1
//                             </button> */}
//                             <button type="submit" className={cx('addToCart__btn-payment')}>
//                                 Place order
//                             </button>
//                         </form>
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default Checkout;

import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import cartSlice from '../../store/shoppingCart/cartSlice';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import Helmet from '../../components/Helmet/Helmet';
import paypalImg from '../../assets/images/paypal.png';
import { toast } from 'react-toastify';

import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);
const Checkout = () => {
    const [enterName, setEnterName] = useState('');
    const [enterEmail, setEnterEmail] = useState('');
    const [enterNumber, setEnterNumber] = useState('');
    const [enterCountry, setEnterCountry] = useState('');
    const [enterCity, setEnterCity] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const shippingInfo = [];

    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 5;

    const totalAmount = cartTotalAmount + Number(shippingCost);

    const navigate = useNavigate();

    const [checkOut, setCheckOut] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        postCode: '',
    });

    const getDataFromUser = (e) => {
        const { name, value } = e.target;
        setCheckOut({ ...checkOut, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, phoneNumber, country, city, postCode } = checkOut;
        const res = await fetch('https://shopee-d3cdd-default-rtdb.firebaseio.com/checkoutData.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phoneNumber,
                country,
                city,
                postCode,
            }),
        });
        setCheckOut({
            name: '',
            email: '',
            phoneNumber: '',
            country: '',
            city: '',
            postCode: '',
        });
        alert('Payment successfully. Thank you!');
        //         // xoá số sp đã mua trong local storage
        localStorage.clear();
        //         //load lại trang
        window.location.reload();
        // toast.success('Form submitted successfully. Thank you!');
    };

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            <section>
                <Container>
                    <Row>
                        <h6 className={cx('billing__details')}>Billing Details</h6>

                        <Col lg="6" md="12">
                            <div className={cx('payment__method')}>
                                <h4>Payment method</h4>
                                <div className="w-100">
                                    <div>
                                        <div className={cx('payment__item')}>
                                            <label htmlFor="Check payments">
                                                <input
                                                    name="paymentmethod"
                                                    type="radio"
                                                    id="Check payments"
                                                    value="Check payments"
                                                />
                                                <span>Check payments</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={cx('payment__item')}>
                                            <label htmlFor="Cash on delivery">
                                                <input
                                                    name="paymentmethod"
                                                    type="radio"
                                                    id="Cash on delivery"
                                                    value="Cash on delivery"
                                                />
                                                <span>Cash on delivery</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={cx('payment__item-last')}>
                                            <label htmlFor="Paypal">
                                                <input name="paymentmethod" type="radio" id="Paypal" value="Paypal" />
                                                <span>Paypal</span>
                                                <img src={paypalImg} alt="" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className={cx('place__order')}>
                                        <p>
                                            Your personal data will be used to process your order, support your
                                            experience throughout this website, and for other purposes described in our
                                            privacy policy.
                                        </p>
                                        {/* <button
                                            type="submit"
                                            className={cx('addToCart__btn-payment')}
                                        >
                                            Place order
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="12" className={cx('total__col')}>
                            <div className={cx('checkout__btn')}>
                                <h3>Cart total</h3>
                                <table className="w-100">
                                    <tbody>
                                        <tr className={cx('checkout__tr')}>
                                            <td>Cart Subtotal</td>
                                            <td>
                                                <span>${cartTotalAmount}</span>
                                            </td>
                                        </tr>
                                        <tr className={cx('checkout__tr')}>
                                            <td>Shipping and Handing </td>
                                            <td>
                                                <span>${shippingCost}</span>
                                            </td>
                                        </tr>
                                        <tr className={cx('checkout__tr')}>
                                            <td>Vat</td>
                                            <td>
                                                <span>$0</span>
                                            </td>
                                        </tr>
                                        <tr className={cx('checkout__tr')}>
                                            <td>
                                                <h6 className={cx('checkout__total')}>Order total</h6>
                                            </td>
                                            <td>
                                                <span className={cx('checkout__total')}>${totalAmount}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <form className={cx('checkout__form')} action="">
                            <h3>Personal information</h3>
                            <div className={cx('form__group')}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={checkOut.name}
                                    onChange={getDataFromUser}
                                    placeholder="Your name..."
                                    required
                                />
                            </div>
                            <div className={cx('form__group')}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={checkOut.email}
                                    onChange={getDataFromUser}
                                    placeholder="Your email..."
                                    required
                                />
                            </div>
                            <div className={cx('form__group')}>
                                <input
                                    type="phoneNumber"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={checkOut.phoneNumber}
                                    required
                                    onChange={getDataFromUser}
                                    placeholder="Your phone number..."
                                />
                            </div>
                            <div className={cx('form__group')}>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={checkOut.country}
                                    required
                                    onChange={getDataFromUser}
                                    placeholder="Your country..."
                                />
                            </div>
                            <div className={cx('form__group')}>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={checkOut.city}
                                    required
                                    onChange={getDataFromUser}
                                    placeholder="Your city..."
                                />
                            </div>
                            <div className={cx('form__group')}>
                                <input
                                    type="number"
                                    id="postCode"
                                    name="postCode"
                                    value={checkOut.postCode}
                                    required
                                    onChange={getDataFromUser}
                                    placeholder="Your postcode..."
                                />
                            </div>
                            <input
                                className={cx('contact__submit')}
                                type="submit"
                                defaultValue="Submit"
                                onClick={postData}
                            ></input>
                        </form>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;

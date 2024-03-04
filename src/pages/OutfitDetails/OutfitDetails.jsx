import React, { useEffect, useState } from 'react';

import logo from '../../assets/images/checkout.png';
// import products from '../../assets/fake-data/products';
import ProductCard from '../../components/UI/ProductCard/ProductCard';

import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import classNames from 'classnames/bind';
import styles from './OutfitDetails.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/shoppingCart/cartSlice';

import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import ProductList from '../../components/UI/ProductList/ProductList';
import useGetData from '../../custom-hooks/useGetData';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

const FoodDetails = () => {
    const [product, setProduct] = useState({});

    const [tab, setTab] = useState('desc');
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [reviewMessaage, setReviewMessaage] = useState('');

    const { id } = useParams();
    const dispatch = useDispatch();

    // const product = products.find((product) => product.id === id);
    const { data: products } = useGetData('products');
    const docRef = doc(db, 'products', id);

    useEffect(() => {
        console.log(relatedProduct);
    });

    useEffect(() => {
        const getProduct = async () => {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct(docSnap.data());
            } else {
                console.log('No product');
            }
        };
        getProduct();
    }, []);

    const [previewImg, setPreviewImg] = useState(product.imgUrl);
    const [previewTitle, setPreviewTitle] = useState(product.title);

    const { title, price, priceOriginal, category, desc, imgUrl, quantity } = product;
    // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [featureTShirt, setFeatureTShirt] = useState([]);
    const [featureShirt, setFeatureShirt] = useState([]);
    const [featureJacket, setFeatureJacket] = useState([]);
    const [featureDress, setFeatureDress] = useState([]);
    useEffect(() => {
        const filteredFeatureTShirt = products.filter((item) => item.category === 't-shirt');
        const sliceFeatureTShirt = filteredFeatureTShirt.slice(0, 3);
        setFeatureTShirt(sliceFeatureTShirt);

        const filteredFeatureShirt = products.filter((item) => item.category === 'shirt');
        const sliceFeatureShirt = filteredFeatureShirt.slice(1, 4);
        setFeatureShirt(sliceFeatureShirt);

        const filteredFeatureJacket = products.filter((item) => item.category === 'jacket');
        const sliceFeatureJacket = filteredFeatureJacket.slice(1, 5);
        setFeatureJacket(sliceFeatureJacket);

        const filteredFeatureDress = products.filter((item) => item.category === 'dress');
        const sliceFeatureDress = filteredFeatureDress.slice(0, 5);
        setFeatureDress(sliceFeatureDress);
    }, [products]);

    const relatedProduct = products.filter((item) => item.category === category);

    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                imgUrl,
            }),
        );
        toast.success('Product added successfully');
    };

    useEffect(() => {
        // setPreviewTitle(product.title);
        setPreviewImg(product.imgUrl);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(enteredName, enteredEmail, reviewMessaage);
    };

    const handleRender = (id) => {
        console.log(relatedProduct.id);
        // window.location.reload();
    };

    return (
        <Helmet title="Product-details">
            <CommonSection title={title} />

            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className={cx('product__images')}>
                                <div className={cx('img__item')} onClick={() => setPreviewImg(product.imgUrl)}>
                                    <img src={product.imgUrl} alt="" className="w-50" />
                                </div>
                                {/* <div className={cx('img__item')} onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="" className="w-50" />
                                </div>
                                <div className={cx('img__item')} onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt="" className="w-50" />
                                </div> */}
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className={cx('product__main-img')}>
                                <img src={previewImg} alt="" className="w-100" />
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className={cx('single__product-content')}>
                                <h2 className={cx('product__title')}>{title}</h2>
                                <p className={cx('product__price')}>
                                    <span className={cx('product__priceSale')}>${price}</span>
                                    <span className={cx('product__priceOriginal')}>${priceOriginal}</span>
                                </p>
                                <p className={cx('category')}>
                                    <span className={cx('category__title')}>Category: </span>
                                    <span className={cx('category__model')}>{category}</span>
                                </p>
                                <div className="d-flex align-items-center justify-content-between ">
                                    <button className={cx('addToCart__details')} onClick={addItem}>
                                        Add to Cart
                                    </button>
                                </div>
                                <div className={cx('social__links-details')}>
                                    <h4 className={cx('social__links-title')}>Share: </h4>
                                    <div className={cx('social__links d-flex gap-3')}>
                                        <span className={cx('social__links-media')}>
                                            <a href="https://www.facebook.com/tamng.05/">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </span>
                                        <span className={cx('social__links-media')}>
                                            <a href="https://github.com/SoulMinT05">
                                                <i className="ri-github-fill"></i>
                                            </a>
                                        </span>
                                        <span className={cx('social__links-media')}>
                                            <a href="#">
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </span>
                                        <span className={cx('social__links-media')}>
                                            <a href="#">
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className="checkout">
                                    <h5>Guaranteed Safe Checkout: </h5>
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="12" className="mt-4">
                            <div className={cx('tabs')}>
                                <h6
                                    className={cx(` ${tab === 'desc' ? 'tab__active' : ''}`)}
                                    onClick={() => setTab('desc')}
                                >
                                    Description
                                </h6>
                                <h6
                                    className={cx(` ${tab === 'rev' ? 'tab__active' : ''}`)}
                                    onClick={() => setTab('rev')}
                                >
                                    Review
                                </h6>
                            </div>

                            {tab === 'desc' ? (
                                <div className={cx('tab__content')}>
                                    <p>{desc}</p>
                                </div>
                            ) : (
                                <div className={cx(' tab__form')}>
                                    <div className={cx('review')}>
                                        <p className={cx('user__name')}>HIEUTHUHAI</p>
                                        <p className={cx('user__email')}>hieuthuhai222@gmail.com</p>
                                        <p className={cx('feedback__text')}>Great product</p>
                                    </div>
                                    <div className={cx('review')}>
                                        <p className={cx('user__name')}>HIEUTHUHAI</p>
                                        <p className={cx('user__email')}>hieuthuhai222@gmail.com</p>
                                        <p className={cx('feedback__text')}>Great product</p>
                                    </div>
                                    <div className={cx('review')}>
                                        <p className={cx('user__name')}>HIEUTHUHAI</p>
                                        <p className={cx('user__email')}>hieuthuhai222@gmail.com</p>
                                        <p className={cx('feedback__text')}>Great product</p>
                                    </div>

                                    <form className={cx('form')} onSubmit={submitHandler}>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                required
                                                onChange={(e) => setEnteredName(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="text"
                                                placeholder="Enter your email"
                                                required
                                                onChange={(e) => setEnteredEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <textarea
                                                row={5}
                                                type="text"
                                                placeholder="Write your review"
                                                required
                                                onChange={(e) => setReviewMessaage(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className="addToCart__btn">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            )}
                        </Col>
                        <Col lg="12" className="mt-12">
                            <h3 className={cx('related__product-title')}>Related Products</h3>
                        </Col>
                        {/* {relatedProduct.map((item) => (
                            // <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                            // <ProductCard item={item} />
                            <ProductCard item={item} />
                            // </Col>
                        ))} */}
                        <ProductList
                            className={cx('all__outfits')}
                            data={relatedProduct}
                            // onClick={handleRender(relatedProduct.id)}
                        />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default FoodDetails;

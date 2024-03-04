import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Helmet from '../../components/Helmet/Helmet';
import Category from '../../components/UI/Category/Category';

//
import classNames from 'classnames/bind';
import styles from './ModelSection.module.scss';

// import '../Home/ModelSection.css';
import '../Home/Home.css';

// import heroImg from '../assets/images/hero.png';
import slider1 from '../../assets/images/slider-1.jpg';
import featureImg04 from '../../assets/images/service-04.png';
import featureImg05 from '../../assets/images/service-05.png';
import featureImg06 from '../../assets/images/service-06.png';
import whyImg from '../../assets/images/location.png';
import netWorkImg from '../../assets/images/network.png';

// import products1 from '../../assets/fake-data/products';
import ProductCard from '../../components/UI/ProductCard/ProductCard';
import TestimonialSlider from '../../components/UI/Slider/TestimonialSlider';
import ProductList from '../../components/UI/ProductList/ProductList';

import useGetData from '../../custom-hooks/useGetData';

const cx = classNames.bind(styles);

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg04,
        desc: 'Fast shipping to customers',
    },
    {
        title: '100% genuine product',
        imgUrl: featureImg05,
        desc: 'Guaranteed genuine product or double your money back',
    },
    {
        title: '7 days free returns ',
        imgUrl: featureImg06,
        desc: 'Free returns within 7 days',
    },
];

const Home = () => {
    const [category, setCategory] = useState('ALL');
    // const [allProducts, setAllProducts] = useState(products1);

    const [featureTShirt, setFeatureTShirt] = useState([]);
    const [featureShirt, setFeatureShirt] = useState([]);
    const [featureJacket, setFeatureJacket] = useState([]);
    const [featureDress, setFeatureDress] = useState([]);

    const { data: products1, loading } = useGetData('products');

    const [allProducts, setAllProducts] = useState(products1);

    // Our products
    useEffect(() => {
        if (category === 'ALL') {
            setAllProducts(products1);
        }
        if (category === 'T-SHIRT') {
            const filteredProducts = products1.filter((item) => item.category === 't-shirt');
            setAllProducts(filteredProducts);
        }
        if (category === 'SHIRT') {
            const filteredProducts = products1.filter((item) => item.category === 'shirt');
            setAllProducts(filteredProducts);
        }
        if (category === 'DRESS') {
            const filteredProducts = products1.filter((item) => item.category === 'dress');
            setAllProducts(filteredProducts);
        }
        if (category === 'JACKET') {
            const filteredProducts = products1.filter((item) => item.category === 'jacket');
            setAllProducts(filteredProducts);
        }
    }, [category]);

    // Feature products
    // useEffect(() => {
    //     const filteredFeatureTShirt = products.filter((item) => item.category === 'T-Shirt');
    //     const sliceFeatureTShirt = filteredFeatureTShirt.slice(0, 3);
    //     setFeatureTShirt(sliceFeatureTShirt);

    //     const filteredFeatureShirt = products.filter((item) => item.category === 'Shirt');
    //     const sliceFeatureShirt = filteredFeatureShirt.slice(1, 4);
    //     setFeatureShirt(sliceFeatureShirt);

    //     const filteredFeatureJacket = products.filter((item) => item.category === 'Jacket');
    //     const sliceFeatureJacket = filteredFeatureJacket.slice(0, 2);
    //     setFeatureJacket(sliceFeatureJacket);
    // }, []);

    useEffect(() => {
        const filteredFeatureTShirt = products1.filter((item) => item.category === 't-shirt');
        const sliceFeatureTShirt = filteredFeatureTShirt.slice(0, 3);
        setFeatureTShirt(sliceFeatureTShirt);

        const filteredFeatureShirt = products1.filter((item) => item.category === 'shirt');
        const sliceFeatureShirt = filteredFeatureShirt.slice(1, 4);
        setFeatureShirt(sliceFeatureShirt);

        const filteredFeatureJacket = products1.filter((item) => item.category === 'jacket');
        const sliceFeatureJacket = filteredFeatureJacket.slice(1, 5);
        setFeatureJacket(sliceFeatureJacket);

        const filteredFeatureDress = products1.filter((item) => item.category === 'dress');
        const sliceFeatureDress = filteredFeatureDress.slice(0, 5);
        setFeatureDress(sliceFeatureDress);
    }, [products1]);

    // useEffect(() => {
    //     // console.log('Data: ', data);
    //     console.log('Products: ', products1);
    // });

    return (
        <Helmet title="Home">
            <section>
                {/* Model-section */}
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className={cx('model__content')}>
                                <h5 className={cx('mb-3')}>Easy way to make an order</h5>
                                <h1 className={cx('model__title')}>
                                    <span>GORGEOUS? </span>
                                    Just wait <br /> outfits at
                                    <span> your door </span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam at, inventore sed
                                    sit ad autem!
                                </p>
                                <div className={cx('model__btns')}>
                                    <Link to="/outfits">
                                        <button className={cx('order__btn')}>
                                            Order now
                                            <i className="ri-arrow-right-s-line"></i>
                                        </button>
                                    </Link>
                                    <Link to="/outfits">
                                        <button className={cx('all__outfits-btn')}>See all outfits</button>
                                    </Link>
                                </div>
                                <div className={cx('d-flex align-items-center gap-5 mt-5 model__service')}>
                                    <p className={cx('d-flex align-items-center gap-2')}>
                                        <span className={cx('shipping__icon')}>
                                            <i className={cx('ri-car-line')}></i>
                                        </span>
                                        Free home delivery
                                    </p>
                                    <p className={cx('d-flex align-items-center gap-2')}>
                                        <span className={cx('shipping__icon')}>
                                            <i className={cx('ri-shield-check-line')}></i>
                                        </span>
                                        100% secure checkout
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className={cx('model__content')}>
                                <div className={cx('model__img')}>
                                    <img src={slider1} alt="hero-img" className="w-100" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className={cx('text-center')}>
                            <h5 className={cx('mb-4 feature__subtitle')}>What we serve</h5>
                            <h2 className={cx('feature__title')}>Just sit back at home</h2>
                            <h2 className={cx('feature__title')}>
                                we will
                                <span> take care</span>
                            </h2>
                            <p className={cx('mb-1 mt-4 feature__text')}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis numquam
                                repudiandae nesciunt nemo quibusdam.
                            </p>
                            <p className={cx('feature__text')}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam.
                            </p>
                        </Col>
                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className={cx('mt-5')}>
                                <div className={cx('feature__item text-center px-5 py-3')}>
                                    <img src={item.imgUrl} alt="feature-img" className={cx('w-25 mb-3')} />
                                    <h5 className={cx('fw-bold mb-3')}>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Product card: Category */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Trending Products</h2>
                        </Col>
                        {/* <Col lg="12">
                            <div className="d-flex align-items-center justify-content-center gap-4 outfit__category ">
                                <button
                                    className={`all__btn outfit__category-hover ${
                                        category === 'ALL' ? 'outfitBtnActive' : ''
                                    } `}
                                    onClick={() => setCategory('ALL')}
                                >
                                    All
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 outfit__category-hover ${
                                        category === 'T-SHIRT' ? 'outfitBtnActive' : ''
                                    } `}
                                    onClick={() => setCategory('T-SHIRT')}
                                >
                                    T-Shirt
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 outfit__category-hover ${
                                        category === 'SHIRT' ? 'outfitBtnActive' : ''
                                    } `}
                                    onClick={() => setCategory('SHIRT')}
                                >
                                    Shirt
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 outfit__category-hover ${
                                        category === 'JACKET' ? 'outfitBtnActive' : ''
                                    } `}
                                    onClick={() => setCategory('JACKET')}
                                >
                                    Jacket
                                </button>
                                <button
                                    className={`d-flex align-items-center gap-2 outfit__category-hover ${
                                        category === 'DRESS' ? 'outfitBtnActive' : ''
                                    } `}
                                    onClick={() => setCategory('DRESS')}
                                >
                                    Dress
                                </button>
                            </div>
                        </Col> */}

                        {/* {products1.map((data) => (
                            // <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                            // <ProductCard item={item} />
                            <ProductList data={allProducts} />
                            // </Col>
                        ))} */}

                        {loading ? <h5 className="fw-bold">Loading....</h5> : <ProductList data={featureDress} />}
                    </Row>
                </Container>
            </section>

            <section className="why__choose-us">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt="why-gorgeous-outfit" className="w-100" />
                        </Col>
                        <Col lg="6" md="6">
                            <div className="why__gorgeous-outfit">
                                <h2 className="gorgeous__outfit-title mb-4">
                                    Why <span>Gorgeous Outfit?</span>
                                </h2>
                                <p className="gorgeous__outfit-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nisi natus dolore,
                                    maxime aliquam quas ipsam incidunt culpa, officia dolorem porro sequi, id laudantium
                                    nostrum? Reprehenderit fugiat voluptas vero ut.
                                </p>
                                <ListGroup className="mt-4">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="d-flex align-items-center gap-2 choose__us-title">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Modern and beautiful outfits
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, saepe.
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="d-flex align-items-center gap-2 choose__us-title ">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Quality support
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                            modi?
                                        </p>
                                    </ListGroupItem>
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className="d-flex align-items-center gap-2 choose__us-title">
                                            <i className="ri-checkbox-circle-line"></i>
                                            Order from any location
                                        </p>
                                        <p className="choose__us-desc">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
                                            modi?
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Render feature products: OK */}
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center ">
                            <h2>Featured Products </h2>
                        </Col>

                        {/* {loading ? (
                            <h5 className="fw-bold">Loading....</h5>
                        ) : (
                            <>
                                {featureTShirt.map((item) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                        <ProductCard item={item} />
                                    </Col>
                                ))}
                                {featureShirt.map((item) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                        <ProductCard item={item} />
                                    </Col>
                                ))}
                                {featureJacket.map((item) => (
                                    <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                        <ProductCard item={item} />
                                    </Col>
                                ))}
                            </>
                        )} */}

                        {loading ? <h5 className="fw-bold">Loading....</h5> : <ProductList data={featureJacket} />}

                        {/* {featureTShirt.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                        {featureShirt.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                        {featureJacket.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-48">
                                <ProductCard item={item} />
                            </Col>
                        ))} */}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial">
                                <h5 className=" mb-4 testimonial__subtitle">Testimonial</h5>
                                <h3 className=" mb-4 testimonial__desc ">
                                    What our <span>customers </span>are saying
                                </h3>
                                <TestimonialSlider />
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img src={netWorkImg} alt="testimonial-img" className="w-100 testimonial__img " />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;

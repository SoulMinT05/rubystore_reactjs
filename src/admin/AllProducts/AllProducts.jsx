import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { db } from '../../firebase.config';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';

import { toast } from 'react-toastify';
import useGetData from '../../custom-hooks/useGetData';
import { Link, useNavigate } from 'react-router-dom';

import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import AddProducts from '../AddProducts/AddProducts';

import classNames from 'classnames/bind';
import styles from './AllProducts.module.scss';

const cx = classNames.bind(styles);

function AllProducts() {
    const { data: productsData, loading } = useGetData('products');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(productsData);
    });

    const deleteProduct = async (id) => {
        if (window.confirm('Are you sure to delete that user?')) {
            await deleteDoc(doc(db, 'products', id));
            toast.success('Product deleted');
        }
    };

    // const updateProduct = async (
    //     id,
    //     enterTitle,
    //     enterShortDescription,
    //     enterDescription,
    //     enterCategory,
    //     enterPrice,
    //     enterPriceOriginal,
    //     enterProductImg,
    // ) => {
    //     // id,
    //     // setEnterTitle,
    //     // setEnterShortDescription,
    //     // setEnterDescription,
    //     // setEnterCategory,
    //     // setEnterPrice,
    //     // setEnterPriceOriginal,
    //     // setEnterProductImg,
    // };

    const passData = async (id) => {
        const matchId = productsData.find((data) => {
            return data.id === id;
        });
        console.log(matchId);
    };

    return (
        <Helmet title="All Products">
            <CommonSection title="All Products" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <h4>All Products</h4>
                        </Col>
                        <Col lg="6" className="text-end">
                            <Link to="/dashboard/add-products">
                                <button className="btn btn-primary mb-4">Add Products</button>
                            </Link>
                        </Col>
                        <Col lg="12">
                            <table className={cx('table-bordered table')}>
                                <thead>
                                    <tr>
                                        <th className={cx('table-info')}>Image</th>
                                        <th className={cx('table-info')}>Title</th>
                                        <th className={cx('table-info')}>Category</th>
                                        <th className={cx('table-info')}>Price</th>
                                        <th className={cx('table-info')}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <h4 className="py-5 fw-bold">Loading........</h4>
                                    ) : (
                                        productsData.map((item) => (
                                            <tr key={item.id}>
                                                <td className={cx('cart__img-box')}>
                                                    <img src={item.imgUrl} alt="" />
                                                </td>
                                                <td className={cx('cart__item-info')}>{item.title}</td>
                                                <td className={cx('cart__item-info')}>{item.category}</td>
                                                <td className={cx('cart__item-price')}>{item.price}</td>

                                                <td className={cx('cart__item-del')}>
                                                    {/* <Link to="/dashboard/update-products"> */}
                                                    {/* <button
                                                        onClick={() => {
                                                            // passData(item.id);
                                                            navigate(`/dashboard/update-products/${item.id}`);
                                                        }}
                                                        className="btn btn-success"
                                                    >
                                                        Update
                                                    </button> */}
                                                    {/* </Link> */}
                                                    <button
                                                        onClick={() => {
                                                            deleteProduct(item.id);
                                                        }}
                                                        className="btn btn-danger ms-2"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default AllProducts;

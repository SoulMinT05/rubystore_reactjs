import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

import useGetData from '../../custom-hooks/useGetData';

import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

function Dashboard() {
    const { data: products } = useGetData('products');
    const { data: users } = useGetData('users');

    useEffect(() => {
        console.log(products.price);
    });

    return (
        <>
            <section>
                <Container>
                    <Row>
                        {/* <Col className="lg-3">
                            <div className={cx('revenue__box')}>
                                <h5>Total Sales</h5>
                                <span>$7892</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className={cx('order__box')}>
                                <h5>Orders</h5>
                                <span>7892</span>
                            </div>
                        </Col> */}
                        <Col className="lg-3">
                            <div className={cx('products__box')}>
                                <h5>Total Products</h5>
                                <span>{products.length}</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                            <div className={cx('users__box')}>
                                <h5>Total Users</h5>
                                <span>{users.length}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Dashboard;

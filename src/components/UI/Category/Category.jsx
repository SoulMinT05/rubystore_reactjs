import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';

import '../../../styles/category.css';

const categoryData = [
    {
        display: 'T-shirt',
        imgUrl: categoryImg01,
    },
    {
        display: 'Shirt',
        imgUrl: categoryImg02,
    },
    {
        display: 'Jacket',
        imgUrl: categoryImg03,
    },
    {
        display: 'Dress',
        imgUrl: categoryImg04,
    },
];

function Category() {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <Link to="/outfits">
                            <div className="d-flex align-items-center gap-3 category__item">
                                <div className="category__img">
                                    <img src={item.imgUrl} alt="category__item" />
                                </div>
                                <h6 className="category__title">{item.display}</h6>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Category;

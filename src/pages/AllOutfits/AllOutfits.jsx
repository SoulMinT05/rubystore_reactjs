import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';

import { Container, Row, Col } from 'reactstrap';
import productsHome from '../../assets/fake-data/products';
import classNames from 'classnames/bind';
import styles from './AllOutfits.module.scss';
import noSearch from '../../assets/images/no-search.jpg';
import ProductList from '../../components/UI/ProductList/ProductList';
import useGetData from '../../custom-hooks/useGetData';

const cx = classNames.bind(styles);

const AllOutfits = () => {
    const { data: products, loading } = useGetData('products');
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);

    // Search products: OK
    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === '') {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item;
    });

    // Pagination: OK
    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // useEffect(() => {
    //     // console.log('Products: ', products.length);
    //     console.log('DisplayPage: ', displayPage);
    // });

    //Filter product
    const [productsData, setProductsData] = useState(displayPage);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === 't-shirt') {
            const filteredProducts = products.filter((item) => item.category === 't-shirt');
            setProductsData(filteredProducts);
        }
        if (filterValue === 'shirt') {
            const filteredProducts = products.filter((item) => item.category === 'shirt');
            setProductsData(filteredProducts);
        }
        if (filterValue === 'dress') {
            const filteredProducts = products.filter((item) => item.category === 'dress');
            setProductsData(filteredProducts);
        }
        if (filterValue === 'jacket') {
            const filteredProducts = products.filter((item) => item.category === 'jacket');
            setProductsData(filteredProducts);
        }
    };

    useEffect(() => {
        // console.log('ProductsData: ', productsData);
        console.log('Displaypage: ', displayPage);
        console.log('visitedPage: ', visitedPage);
        console.log('pageCount: ', visitedPage);
    });

    //Sort price
    const [productCards, setProductCards] = useState(productsHome);

    useEffect(() => {
        setProductCards([
            ...productCards.sort((a, b) => {
                return a.price - b.price;
            }),
        ]);
    }, []);

    function sortProductsByPrice(e) {
        e.stopPropagation();
        if (e.target.value === 'ascending') {
            setProductCards([
                ...productCards.sort((a, b) => {
                    return a.title < b.title;
                }),
            ]);
        }
        if (e.target.value === 'descending') {
            setProductCards([
                ...productCards.sort((a, b) => {
                    return a.title > b.title;
                }),
            ]);
        }
        if (e.target.value === 'LowToHigh') {
            setProductCards([
                ...productCards.sort((a, b) => {
                    return a.price - b.price;
                }),
            ]);
        }
        if (e.target.value === 'HighToLow') {
            setProductCards([
                ...productCards.sort((a, b) => {
                    return b.price - a.price;
                }),
            ]);
        }
    }

    // useEffect(() => {
    //     setProductCards([
    //         ...productCards.sort((a, b) => {
    //             return a.price - b.price;
    //         }),
    //     ]);
    // }, []);

    // function sortProductsByPrice(e) {
    //     e.stopPropagation();
    //     if (e.target.value === 'ascending') {
    //         setProductCards([
    //             ...productCards.sort((a, b) => {
    //                 return a.title < b.title;
    //             }),
    //         ]);
    //     }
    //     if (e.target.value === 'descending') {
    //         setProductCards([
    //             ...productCards.sort((a, b) => {
    //                 return a.title > b.title;
    //             }),
    //         ]);
    //     }
    //     if (e.target.value === 'LowToHigh') {
    //         setProductCards([
    //             ...productCards.sort((a, b) => {
    //                 return a.price - b.price;
    //             }),
    //         ]);
    //     }
    //     if (e.target.value === 'HighToLow') {
    //         setProductCards([
    //             ...productCards.sort((a, b) => {
    //                 return b.price - a.price;
    //             }),
    //         ]);
    //     }
    // }

    return (
        <Helmet title="All-Outfits">
            <CommonSection title="All Outfits" />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className={cx('search__widget')}>
                                <input
                                    type="text"
                                    placeholder="Search for ..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span>
                                    <i className={cx('ri-search-line')}></i>
                                </span>
                            </div>
                            {/* {displayPage.length === 0 ? (
                                <div className={cx('noSearch')}>
                                    <h6>No search result</h6>
                                    <img src={noSearch} alt="no-search" />
                                </div>
                            ) : (
                                // <Col lg="3" md="4" sm="6" xs="6" className={cx('all__outfits')}>
                                <div className={cx('all__outfits')}>
                                    <ProductList className={cx('outfit')} data={displayPage} />
                                </div>
                                // </Col>
                            )} */}
                        </Col>
                        {/* <Col lg="3" md="3" sm="6" xs="12" className="mb-4">
                            <div className={cx('filter__widget')}>
                                <select className={cx('filter__select')} onChange={handleFilter}>
                                    <option value>Filter category</option>
                                    <option value="t-shirt">T-shirt</option>
                                    <option value="shirt">shirt</option>
                                    <option value="dress">Dress</option>
                                    <option value="jacket">Jacket</option>
                                </select>
                            </div>
                        </Col> */}
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-4">
                            <div className={cx('sorting__widget')}>
                                <select className={cx('sorting__select')} onChange={(e) => sortProductsByPrice(e)}>
                                    <option value>Sort By Popularity</option>
                                    {/* <option value="ascending" onChange={() => console.log('A->Z')}>
                                        Sort By Alphabet:HighToLow From A to Z
                                    </option>
                                    <option value="descending" onClick={() => console.log('Z->A')}>
                                        Sort By Alphabet: From Z to A
                                    </option> */}
                                    <option value="HighToLow" onChange={() => console.log('High -> Low')}>
                                        Sort By Alphabet:High To Low From A to Z
                                    </option>
                                    <option value="LowToHigh" onChange={() => console.log('Low -> High')}>
                                        Sort By Alphabet:Low to High From A to Z
                                    </option>
                                </select>
                            </div>
                            {/* <div>
                                <h3>Filter By</h3>
                                <label htmlFor="" className={cx('sidebar__label-container')}>
                                    <input type="radio" name="test" />
                                    <span className="checkmark"></span>All
                                </label>
                            </div> */}
                        </Col>
                        {displayPage.length === 0 && loading ? (
                            <div className={cx('noSearch')}>
                                <h6>No products</h6>
                                <img src={noSearch} alt="no-search" />
                            </div>
                        ) : (
                            <>
                                {/* <h3 className="fw-bold">Loading....</h3> */}
                                <ProductList className={cx('all__outfits')} data={displayPage} />
                            </>
                        )}

                        {/* {loading ? (
                            <h3 className="fw-bold">Loading....</h3>
                        ) : (
                            <ProductList className={cx('all__outfits')} data={displayPage} />
                        )} */}

                        {/* Pagination */}
                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                selectedPageRel={cx('selected')}
                                previousLabel={cx('Prev')}
                                nextLabel={cx('Next')}
                                // nextLabel={currentPage === totalPages - 1 ? null : "Next"}

                                activeClassName={'active'}
                                //   onPageChange={(event) => setPage(event.selected)}
                                containerClassName={cx('paginationBtns')}
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllOutfits;

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

import { db, storage } from '../../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';

import classNames from 'classnames/bind';
import styles from './AddProducts.module.scss';

const cx = classNames.bind(styles);

function AddProducts() {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterShortDescription, setEnterShortDescription] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterCategory, setEnterCategory] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterPriceOriginal, setEnterPriceOriginal] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // const { id } = useParams();
    // const docRef = doc(db, 'user', id);
    // const snapshot = getDoc(docRef);
    // useEffect(() => {
    //     console.log(snapshot);
    // });

    const addProduct = async (e) => {
        e.preventDefault();
        setLoading(true);
        //Add product to firebase database
        try {
            const docRef = await collection(db, 'products');
            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`);
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

            uploadBytesResumable(storageRef, enterProductImg).then(() => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        title: enterTitle,
                        shortDesc: enterShortDescription,
                        desc: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        priceOriginal: enterPriceOriginal,
                        imgUrl: downloadURL,
                        timeStamp: serverTimestamp(),
                        // image02: downloadURL,
                        // imgUrl: downloadURL,
                    });
                });
            });
            setLoading(false);
            toast.success('Product successfully added');
            navigate('/dashboard/all-products');
        } catch (err) {
            setLoading(false);
            toast.error('Product not added');
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className={cx('addProducts__col')}>
                        {loading ? (
                            <h4 className="text-center py-5">Loading</h4>
                        ) : (
                            <>
                                <h4>Add Product</h4>
                                <Form onSubmit={addProduct}>
                                    <FormGroup className={cx('form__group')}>
                                        <span>Product Title</span>
                                        <input
                                            type="text"
                                            placeholder="T-Shirt"
                                            value={enterTitle}
                                            onChange={(e) => setEnterTitle(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup className={cx('form__group')}>
                                        <span>Short Description</span>
                                        <input
                                            type="text"
                                            placeholder="lorem..."
                                            value={enterShortDescription}
                                            onChange={(e) => setEnterShortDescription(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup className={cx('form__group')}>
                                        <span>Description</span>
                                        <input
                                            type="text"
                                            placeholder="Description..."
                                            value={enterDescription}
                                            onChange={(e) => setEnterDescription(e.target.value)}
                                            required
                                        />
                                    </FormGroup>

                                    <div className={cx('price__category')}>
                                        <FormGroup className={cx('form__group-price')}>
                                            <span>Price</span>
                                            <input
                                                type="text"
                                                placeholder="100"
                                                value={enterPrice}
                                                onChange={(e) => setEnterPrice(e.target.value)}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className={cx('form__group-price')}>
                                            <span>Price Original</span>
                                            <input
                                                type="text"
                                                placeholder="120"
                                                value={enterPriceOriginal}
                                                onChange={(e) => setEnterPriceOriginal(e.target.value)}
                                                required
                                            />
                                        </FormGroup>
                                        {/* <FormGroup className={cx('form__group-category')}>
                                            <span>Category</span>
                                            <select
                                                value={enterCategory}
                                                onChange={(e) => setEnterCategory(e.target.value)}
                                            >
                                                <option>Choose category</option>
                                                <option value="t-shirt">T-Shirt</option>
                                                <option value="shirt">Shirt</option>
                                                <option value="jacket">Jacket</option>
                                                <option value="dress">Dress</option>
                                            </select>
                                        </FormGroup> */}
                                    </div>

                                    <div className={cx('category__image')}>
                                        <FormGroup className={cx('form__group-category')}>
                                            <span>Category</span>
                                            <select
                                                value={enterCategory}
                                                onChange={(e) => setEnterCategory(e.target.value)}
                                            >
                                                <option>Choose category</option>
                                                <option value="t-shirt">T-Shirt</option>
                                                <option value="shirt">Shirt</option>
                                                <option value="jacket">Jacket</option>
                                                <option value="dress">Dress</option>
                                            </select>
                                        </FormGroup>
                                        <FormGroup className={cx('form__group-category')}>
                                            <span>Product Image 01</span>
                                            <input
                                                type="file"
                                                onChange={(e) => setEnterProductImg(e.target.files[0])}
                                                required
                                            />
                                        </FormGroup>
                                    </div>
                                    {/* <div className={cx('category__image')}>
                                        <FormGroup className={cx('form__group-category')}>
                                            <span>Product Image 02</span>
                                            <input
                                                type="file"
                                                onChange={(e) => setEnterProductImg(e.target.files[0])}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup className={cx('form__group-category')}>
                                            <span>Product Image 03</span>
                                            <input
                                                type="file"
                                                onChange={(e) => setEnterProductImg(e.target.files[0])}
                                                required
                                            />
                                        </FormGroup>
                                    </div> */}

                                    <button className={cx('addProduct__btn')} type="submit">
                                        Add Product
                                    </button>
                                </Form>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AddProducts;

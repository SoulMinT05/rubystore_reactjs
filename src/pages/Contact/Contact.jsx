import React, { useState } from 'react';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact = () => {
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        // email: '',
        country: '',
        subject: '',
    });

    const getDataFromUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        const { fname, lname, email, country, subject } = user;
        const res = await fetch('https://shopee-d3cdd-default-rtdb.firebaseio.com/userData.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fname,
                lname,
                // email,
                country,
                subject,
            }),
        });
        setUser({
            fname: '',
            lname: '',
            // email = '',
            country: '',
            subject: '',
        });
        toast.success('Form submitted successfully. Thank you!');
    };

    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <Container>
                <Row>
                    <h3 className={cx('contact__title')}>Contact form</h3>
                    <div className={cx('container')}>
                        <form action="">
                            <label htmlFor="fname">First Name</label>
                            <input
                                className={cx('contact__input')}
                                type="text"
                                id="fname"
                                name="fname"
                                value={user.fname}
                                onChange={getDataFromUser}
                                placeholder="Your name..."
                            />
                            <label htmlFor="lname">Last Name</label>
                            <input
                                className={cx('contact__input')}
                                type="text"
                                id="lname"
                                name="lname"
                                value={user.lname}
                                onChange={getDataFromUser}
                                placeholder="Your last name..."
                            />
                            {/* <label htmlFor="email">Email</label>
                            <input
                                className={cx('contact__input')}
                                type="text"
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={getDataFromUser}
                                placeholder="Your email..."
                            /> */}
                            <label htmlFor="country">Country</label>
                            <select
                                className={cx('contact__select')}
                                name="country"
                                id="country"
                                value={user.country}
                                onChange={getDataFromUser}
                            >
                                <option>Select country</option>
                                <option value="vietnam">VietNam</option>
                                <option value="usa">USA</option>
                                <option value="canada">Canada</option>
                            </select>
                            <label htmlFor="subject">Message</label>
                            <textarea
                                className={cx('contact__textarea')}
                                name="subject"
                                id="subject"
                                value={user.subject}
                                placeholder="Write something..."
                                style={{ height: 200 }}
                                // defaultValue={''}
                                onChange={getDataFromUser}
                            />
                            <input
                                className={cx('contact__submit')}
                                type="submit"
                                defaultValue="Submit"
                                onClick={postData}
                            ></input>
                        </form>
                    </div>
                </Row>
            </Container>
        </Helmet>
    );
};

export default Contact;

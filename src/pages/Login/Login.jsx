import React, { useState, useRef } from 'react';

import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';

import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);

            setLoading(false);
            toast.success('Successfully logged in');
            navigate('/checkout');
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    };

    return (
        <Helmet title="Login">
            <CommonSection title="Login" />
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="12" className="text-center">
                                <h5 className="fw-bold">Loading....</h5>
                            </Col>
                        ) : (
                            <Row>
                                <div className={cx('login__title')}>
                                    <h2>Sign In To Your Account</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non
                                        distinctio vel iste.
                                    </p>
                                </div>
                                {/* <div className='mt-4'> */}
                                <Col lg="6" md="6" sm="12" className={cx('login__col')}>
                                    <form action="" className={cx('form')} onSubmit={signIn}>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <button type="submit" className={cx('signin__account')}>
                                            Sign in
                                        </button>
                                        <div className={cx('forgot__account')}>
                                            <a href="#">FORGOTTEN YOUR PASSWORD?</a>
                                        </div>
                                    </form>
                                </Col>
                                <Col lg="6" md="6" sm="12" className={cx('login__col')}>
                                    <h4>DON'T HAVE AN ACCOUNT?</h4>
                                    <p>
                                        Add items to your wishlistget personalised recommendations check out more
                                        quickly track your orders register
                                    </p>
                                    <Link to="/register">
                                        <button className={cx('create__account')}>Create Account</button>
                                    </Link>
                                </Col>
                                {/* </div> */}
                            </Row>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};
export default Login;

// import React, { useState, useRef } from 'react';

// import Helmet from '../../components/Helmet/Helmet';
// import CommonSection from '../../components/UI/CommonSection/CommonSection';

// import { Container, Row, Col } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';

// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase.config';
// import { toast } from 'react-toastify';

// import classNames from 'classnames/bind';
// import styles from './Login.module.scss';

// const cx = classNames.bind(styles);

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const signIn = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, email, password);
//             const user = userCredential.user;
//             console.log(user);

//             setLoading(false);
//             toast.success('Successfully logged in');
//             navigate('/checkout');
//         } catch (error) {
//             setLoading(false);
//             toast.error(error.message);
//         }
//     };

//     return (
//         <Helmet title="Login">
//             <CommonSection title="Login" />
//             <section>
//                 <Container>
//                     <Row>
//                         {loading ? (
//                             <Col lg="12" className="text-center">
//                                 <h5 className="fw-bold">Loading....</h5>
//                             </Col>
//                         ) : (
//                             <Row>
//                                 <div className={cx('login__title')}>
//                                     <h2>Sign In To Your Account</h2>
//                                     <p>
//                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non
//                                         distinctio vel iste.
//                                     </p>
//                                 </div>
//                                 {/* <div className='mt-4'> */}
//                                 <Col lg="6" md="6" sm="12" className={cx('login__col')}>
//                                     <form action="" className={cx('form')} onSubmit={signIn}>
//                                         <div className={cx('form__group')}>
//                                             <input
//                                                 type="email"
//                                                 placeholder="Email"
//                                                 required
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className={cx('form__group')}>
//                                             <input
//                                                 type="password"
//                                                 placeholder="Password"
//                                                 required
//                                                 value={password}
//                                                 onChange={(e) => setPassword(e.target.value)}
//                                             />
//                                         </div>
//                                         <button type="submit" className={cx('signin__account')}>
//                                             Sign in
//                                         </button>
//                                         <div className={cx('forgot__account')}>
//                                             <a href="#">FORGOTTEN YOUR PASSWORD?</a>
//                                         </div>
//                                     </form>
//                                 </Col>
//                                 <Col lg="6" md="6" sm="12" className={cx('login__col')}>
//                                     <h4>DON'T HAVE AN ACCOUNT?</h4>
//                                     <p>
//                                         Add items to your wishlistget personalised recommendations check out more
//                                         quickly track your orders register
//                                     </p>
//                                     <Link to="/register">
//                                         <button className={cx('create__account')}>Create Account</button>
//                                     </Link>
//                                 </Col>
//                                 {/* </div> */}
//                             </Row>
//                         )}
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };
// export default Login;

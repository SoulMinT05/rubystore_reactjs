import React, { useRef, useState, useEffect } from 'react';

import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/CommonSection/CommonSection';

import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Register.module.scss';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes, listAll } from 'firebase/storage';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

import { auth } from '../../firebase.config';
import { storage } from '../../firebase.config';
import { db } from '../../firebase.config';

import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signUp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = await userCredential.user;

            // const storageRef = ref(storage, `images/${username}`);
            // console.log(storageRef);
            // const uploadTask = uploadBytesResumable(storageRef, file);

            // uploadTask.on(
            //     (error) => {
            //         toast.error(error.message);
            //     },
            //     () => {
            //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            //             //update user profile
            //             await updateProfile(user, {
            //                 displayName: username,
            //                 photoURL: downloadURL,
            //             });
            //             //store user data in firestore database
            //             await setDoc(doc(db, 'users', user.uid), {
            //                 uid: user.uid,
            //                 displayName: username,
            //                 email,
            //                 photoURL: downloadURL,
            //             });
            //         });
            //     },
            // );

            if (file == null) return;
            const storageRef = ref(storage, `images/${Date.now() + username}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    //update user profile
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL,
                    });
                    //store user data in firestore database
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL,
                        timeStamp: serverTimestamp(),
                    });
                });
            });
            setLoading(false);
            toast.success('Account created');
            navigate('/login');
        } catch (error) {
            setLoading(false);
            toast.error('something went wrong');
            console.log(error.message);
        }
    };

    return (
        <Helmet title="Register">
            <CommonSection title="Register" />
            <section>
                <Container>
                    <Row>
                        {loading ? (
                            <Col lg="12" className="text-center">
                                <h5 className="fw-bold">Loading....</h5>
                            </Col>
                        ) : (
                            <Row>
                                <div className={cx('register__title')}>
                                    <h2>Sign Up To Your Account</h2>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non
                                        distinctio vel iste.
                                    </p>
                                </div>
                                <Col lg="6" md="6" sm="12" className={cx('register__col')}>
                                    <form action="" className={cx('form')} onSubmit={signUp}>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className={cx('form__group')}>
                                            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                        </div>
                                        <button type="submit" className={cx('signup__account')}>
                                            Create an account
                                        </button>
                                        <div className={cx('forgot__account')}>
                                            <a href="#">FORGOTTEN YOUR PASSWORD?</a>
                                        </div>
                                    </form>
                                </Col>
                                <Col lg="6" md="6" sm="12" className={cx('register__col')}>
                                    <h4>ALREADY HAVE AN ACCOUNT?</h4>
                                    <p>
                                        Add items to your wishlistget personalised recommendations check out more
                                        quickly track your orders register
                                    </p>
                                    <Link to="/login">
                                        <button className={cx('signin__account')}>Sign in</button>
                                    </Link>
                                </Col>
                            </Row>
                        )}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};
export default Register;

// import React, { useRef, useState, useEffect } from 'react';

// import Helmet from '../../components/Helmet/Helmet';
// import CommonSection from '../../components/UI/CommonSection/CommonSection';

// import { Container, Row, Col } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';

// import classNames from 'classnames/bind';
// import styles from './Register.module.scss';

// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { ref, uploadBytesResumable, getDownloadURL, uploadBytes, listAll } from 'firebase/storage';
// import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

// import { auth } from '../../firebase.config';
// import { storage } from '../../firebase.config';
// import { db } from '../../firebase.config';

// import { toast } from 'react-toastify';

// const cx = classNames.bind(styles);

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [file, setFile] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const signUp = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//             const user = await userCredential.user;

//             // const storageRef = ref(storage, `images/${username}`);
//             // console.log(storageRef);
//             // const uploadTask = uploadBytesResumable(storageRef, file);

//             // uploadTask.on(
//             //     (error) => {
//             //         toast.error(error.message);
//             //     },
//             //     () => {
//             //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             //             //update user profile
//             //             await updateProfile(user, {
//             //                 displayName: username,
//             //                 photoURL: downloadURL,
//             //             });
//             //             //store user data in firestore database
//             //             await setDoc(doc(db, 'users', user.uid), {
//             //                 uid: user.uid,
//             //                 displayName: username,
//             //                 email,
//             //                 photoURL: downloadURL,
//             //             });
//             //         });
//             //     },
//             // );

//             if (file == null) return;
//             const storageRef = ref(storage, `images/${Date.now() + name}`);
//             const uploadTask = uploadBytesResumable(storageRef, file);
//             uploadBytesResumable(storageRef, file).then(() => {
//                 getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//                     //update user profile
//                     await updateProfile(user, {
//                         name: name,
//                         img: downloadURL,
//                     });
//                     //store user data in firestore database
//                     await setDoc(doc(db, 'user', user.id), {
//                         id: user.id,
//                         name: name,
//                         email,
//                         img: downloadURL,
//                         timeStamp: serverTimestamp(),
//                     });
//                 });
//             });
//             setLoading(false);
//             toast.success('Account created');
//             navigate('/login');
//         } catch (error) {
//             setLoading(false);
//             toast.error('something went wrong');
//             console.log(error.message);
//         }
//     };

//     return (
//         <Helmet title="Register">
//             <CommonSection title="Register" />
//             <section>
//                 <Container>
//                     <Row>
//                         {loading ? (
//                             <Col lg="12" className="text-center">
//                                 <h5 className="fw-bold">Loading....</h5>
//                             </Col>
//                         ) : (
//                             <Row>
//                                 <div className={cx('register__title')}>
//                                     <h2>Sign Up To Your Account</h2>
//                                     <p>
//                                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non
//                                         distinctio vel iste.
//                                     </p>
//                                 </div>
//                                 <Col lg="6" md="6" sm="12" className={cx('register__col')}>
//                                     <form action="" className={cx('form')} onSubmit={signUp}>
//                                         <div className={cx('form__group')}>
//                                             <input
//                                                 type="text"
//                                                 placeholder="Username"
//                                                 value={name}
//                                                 onChange={(e) => setName(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className={cx('form__group')}>
//                                             <input
//                                                 type="email"
//                                                 placeholder="Email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className={cx('form__group')}>
//                                             <input
//                                                 type="password"
//                                                 placeholder="Password"
//                                                 value={password}
//                                                 onChange={(e) => setPassword(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className={cx('form__group')}>
//                                             <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//                                         </div>
//                                         <button type="submit" className={cx('signup__account')}>
//                                             Create an account
//                                         </button>
//                                         <div className={cx('forgot__account')}>
//                                             <a href="#">FORGOTTEN YOUR PASSWORD?</a>
//                                         </div>
//                                     </form>
//                                 </Col>
//                                 <Col lg="6" md="6" sm="12" className={cx('register__col')}>
//                                     <h4>ALREADY HAVE AN ACCOUNT?</h4>
//                                     <p>
//                                         Add items to your wishlistget personalised recommendations check out more
//                                         quickly track your orders register
//                                     </p>
//                                     <Link to="/login">
//                                         <button className={cx('signin__account')}>Sign in</button>
//                                     </Link>
//                                 </Col>
//                             </Row>
//                         )}
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };
// export default Register;

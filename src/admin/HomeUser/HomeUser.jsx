import React, { useState, useEffect } from 'react';
import { db } from '../../firebase.config';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import ModalComp from '../ModalComp/ModalComp';
import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import useGetData from '../../custom-hooks/useGetData';

import classNames from 'classnames/bind';
import styles from './HomeUser.module.scss';

const cx = classNames.bind(styles);

function HomeUser() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    // const [user, setUser] = useState({ id: '', name: '', email: '', img: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { data: usersData } = useGetData('users1');

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(
            collection(db, 'user'),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setUsers(list);
                setLoading(false);
            },
            (error) => {
                console.log(error);
            },
        );
        return () => {
            unsub();
        };
    }, []);

    const handleModal = (item) => {
        setOpen(true);
        setUser(item);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure to delete that user?')) {
            try {
                setOpen(false);
                await deleteDoc(doc(db, 'user', id));
                setUsers(users.filter((user) => user.id !== id));
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        console.log(user);
    });

    return (
        // <Container>
        //     <Card.Group>
        //         <Grid columns={3} stackable>
        //             {users &&
        //                 users.map((item) => (
        //                     <Grid.Column key={item.id}>
        //                         <Card>
        //                             <Card.Content className={cx('card')}>
        //                                 <Image
        //                                     src={item.img}
        //                                     size="medium"
        //                                     style={{
        //                                         height: '150px',
        //                                         width: '150px',
        //                                         borderRadius: '50%',
        //                                     }}
        //                                 />
        //                                 <Card.Header style={{ marginTop: '10px' }}>{item.name}</Card.Header>
        //                                 <Card.Description>{item.email}</Card.Description>
        //                             </Card.Content>
        //                             <Card.Content extra>
        //                                 <div>
        //                                     <Button
        //                                         color="green"
        //                                         onClick={() => navigate(`/dashboard/update/${item.id}`)}
        //                                     >
        //                                         Update
        //                                     </Button>
        //                                     <Button color="purple" onClick={() => handleModal(item)}>
        //                                         View
        //                                     </Button>
        //                                     {open && (
        //                                         <ModalComp
        //                                             open={open}
        //                                             setOpen={setOpen}
        //                                             // handleDelete={() => console.log('Delete')}
        //                                             handleDelete={handleDelete}
        //                                             {...user}
        //                                         />
        //                                     )}
        //                                 </div>
        //                             </Card.Content>
        //                         </Card>
        //                     </Grid.Column>
        //                 ))}
        //         </Grid>
        //     </Card.Group>
        // </Container>
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <h4>Home User</h4>
                    </Col>
                    <Col lg="6" className="text-end">
                        <Link to="/dashboard/add">
                            <button className="btn btn-primary mb-4">Add Products</button>
                        </Link>
                    </Col>
                    <Col lg="12" className="pt-5">
                        <table className={cx('table-bordered table')}>
                            <thead>
                                <tr>
                                    <th className={cx('table-info')}>Image</th>
                                    <th className={cx('table-info')}>Username</th>
                                    <th className={cx('table-info')}>Email</th>
                                    <th className={cx('table-info')}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <h4 className="pt-5 fw-bold">Loading....</h4>
                                ) : (
                                    // users &&
                                    usersData?.map((user) => (
                                        // usersData?.map((user) => (
                                        <tr key={user.id}>
                                            <td className={cx('cart__img-box')}>
                                                <img src={user.photoURL} alt="" />
                                            </td>
                                            <td className={cx('cart__item-info')}>{user.displayName}</td>
                                            <td className={cx('cart__item-info')}>{user.email}</td>
                                            <td className={cx('cart__item-del')}>
                                                <div>
                                                    <Button
                                                        color="green"
                                                        onClick={() => navigate(`/dashboard/update/${user.id}`)}
                                                    >
                                                        Update
                                                    </Button>

                                                    <Button
                                                        color="red"
                                                        onClick={() => {
                                                            handleDelete(user.id);
                                                        }}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
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
    );
}

export default HomeUser;

import { Container, Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

import useGetData from '../../custom-hooks/useGetData';
import { deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../firebase.config';

import classNames from 'classnames/bind';
import styles from './Users.module.scss';

const cx = classNames.bind(styles);

function Users() {
    const { data: usersData, loading } = useGetData('users');

    const deleteUser = async (id) => {
        if (window.confirm('Are you sure to delete that user?')) {
            await deleteDoc(doc(db, 'users', id));
            toast.success('User deleted');
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <h4>Users</h4>
                    </Col>
                    {/* <Col lg="6" className="text-end">
                        <Link to="/dashboard/add">
                            <button className="btn btn-primary mb-4">Add Users</button>
                        </Link>
                    </Col> */}
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
                                    usersData?.map((user) => (
                                        <tr key={user.uid}>
                                            <td className={cx('cart__img-box')}>
                                                <img src={user.photoURL} alt="" />
                                            </td>
                                            <td className={cx('cart__item-info')}>{user.displayName}</td>
                                            <td className={cx('cart__item-info')}>{user.email}</td>
                                            <td className={cx('cart__item-del')}>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        deleteUser(user.uid);
                                                    }}
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
    );
}

export default Users;

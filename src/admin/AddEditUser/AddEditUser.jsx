import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Loader } from 'semantic-ui-react';
import { db, storage } from '../../firebase.config';
import { useParams, useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

const initialState = {
    // title: '',
    // shortDesc: '',
    // desc: '',
    // category: '',
    // price: '',
    // priceOriginal: '',
    displayName: '',
    email: '',
    info: '',
    contact: '',
};

function AddEditUser() {
    const [data, setData] = useState(initialState);
    const { name, email, info, contact } = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        id && getSingleUser();
    }, [id]);

    const getSingleUser = async () => {
        const docRef = doc(db, 'user', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setData({ ...snapshot.data() });
        }
    };

    useEffect(() => {
        let isMounted = true;

        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is pause');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    if (isMounted) {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setData((prev) => ({ ...prev, photoURL: downloadURL }));
                        });
                    }
                },
            );
        };
        if (file) {
            uploadFile();
        }

        return () => {
            isMounted = false; // Set isMounted to false when unmounting
        };
        // file && uploadFile();
    }, [file]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let errors = {};
        if (!name) {
            errors.name = 'Name is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!info) {
            errors.info = 'Info is required';
        }
        if (!contact) {
            errors.contact = 'Contact is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = validate();

        if (Object.keys(errors).length) return setErrors(errors);
        setIsSubmit(true);
        if (!id) {
            try {
                await addDoc(collection(db, 'users1'), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await updateDoc(doc(db, 'user', id), {
                    ...data,
                    timestamp: serverTimestamp(),
                });
            } catch (error) {
                console.log(error);
            }
        }

        navigate('/dashboard/homeuser');
    };

    return (
        <div>
            <Grid centered verticalAlign="middle" columns="3" style={{ height: '120vh' }}>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <div>
                            {isSubmit ? (
                                <Loader active inline="centered" size="huge" />
                            ) : (
                                <>
                                    <h2>{id ? 'Update User' : 'Add User'}</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Input
                                            label="Name"
                                            error={errors.name ? { content: errors.name } : null}
                                            placeholder="Enter Name"
                                            name="name"
                                            onChange={handleChange}
                                            value={name}
                                            autoFocus
                                        />
                                        <Form.Input
                                            label="Email"
                                            error={errors.email ? { content: errors.email } : null}
                                            placeholder="Enter Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={email}
                                        />
                                        <Form.TextArea
                                            label="Info"
                                            error={errors.info ? { content: errors.info } : null}
                                            placeholder="Enter Info"
                                            name="info"
                                            onChange={handleChange}
                                            value={info}
                                        />
                                        <Form.Input
                                            label="Contact"
                                            error={errors.contact ? { content: errors.contact } : null}
                                            placeholder="Enter Contact"
                                            name="contact"
                                            onChange={handleChange}
                                            value={contact}
                                        />
                                        <Form.Input
                                            label="Upload"
                                            type="file"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                        <Button primary type="submit" disabled={progress !== null && progress < 100}>
                                            Submit
                                        </Button>
                                    </Form>
                                </>
                            )}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default AddEditUser;

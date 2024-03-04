import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBR2EAmIB8CCDTN97gXTvJQKfHIXZr4Ubg',
    authDomain: 'shopee-d3cdd.firebaseapp.com',
    projectId: 'shopee-d3cdd',
    storageBucket: 'shopee-d3cdd.appspot.com',
    messagingSenderId: '402134253694',
    appId: '1:402134253694:web:584c18c7f3334f215cd82f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

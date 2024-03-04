import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <ToastContainer theme="light" position="top-right" autoClose={4000} closeOnClick pauseOnHover={false} />
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

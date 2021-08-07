import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Routes from './routes/PathRoutes';

import { Provider } from 'react-redux';
import Store from './redux/Store';

require('dotenv').config();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Routes />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

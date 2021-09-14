import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Routes from './routes/PathRoutes';

import { Provider } from 'react-redux';
import stores from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = stores();

require('dotenv').config();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

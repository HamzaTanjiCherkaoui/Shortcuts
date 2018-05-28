import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';
import './index.css';

const store = configureStore();
const jsx = (
    <div className="container">
    <Provider store={store}>
        <AppRouter/>
        </Provider>
    </div>

);
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

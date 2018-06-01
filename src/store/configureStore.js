import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import shortcutsReducer from '../reducers/shortcuts';
import uiReducer from '../reducers/ui';
import api from '../middlewares/api';


export default() => {
    const store = createStore(combineReducers({shortcutsState: shortcutsReducer , ui : uiReducer}), applyMiddleware(thunk, promiseMiddleware() , api));

    return store;
};
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import shortcutsReducer from '../reducers/shortcuts';
import api from '../middlewares/api';


export default() => {
    const store = createStore(combineReducers({shortcutsState: shortcutsReducer}), applyMiddleware(thunk, promiseMiddleware() , api));

    return store;
};
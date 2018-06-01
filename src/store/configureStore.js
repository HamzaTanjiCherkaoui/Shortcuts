import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import shortcutsReducer from '../reducers/shortcuts';
import uiReducer from '../reducers/ui';
import log from '../middlewares/log';


export default() => {
    const store = createStore(combineReducers({shortcutsState: shortcutsReducer , ui : uiReducer}), applyMiddleware(thunk, promiseMiddleware() , log(false)));

    return store;
};
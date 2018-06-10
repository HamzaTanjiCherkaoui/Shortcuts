import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import shortcutsReducer from '../reducers/shortcuts';
import shortcutsMockReducer from '../reducers/shortcuts.mock';
import uiReducer from '../reducers/ui';
import log from '../middlewares/log';
import mock from '../middlewares/mock';


export default() => {
    const store = createStore(combineReducers({shortcutsState: shortcutsReducer , ui : uiReducer }), applyMiddleware(mock(false),thunk, promiseMiddleware() , log(true)));

    return store;
};
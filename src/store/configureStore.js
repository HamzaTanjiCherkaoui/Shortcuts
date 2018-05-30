import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import shortcutsReducer from '../reducers/shortcuts';

export default() => {
    const store = createStore(combineReducers({shortcutsState: shortcutsReducer}), applyMiddleware(thunk, promiseMiddleware()));

    return store;
};
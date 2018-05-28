import {createStore , combineReducers} from 'redux';
import shortcutsReducer from '../reducers/shortcuts';

export default () => {
    const store = createStore(
        combineReducers({shortcuts:shortcutsReducer})
    );
    
    return store;
    };


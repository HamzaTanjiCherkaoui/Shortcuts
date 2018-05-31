import {fetchShortcuts,getShortcut} from '../services/shortcutsService';

 const setShortcuts = ({query} = {query:{sort:'trending'}}) => ({
    type: 'SET_SHORTCUTS',
    payload: fetchShortcuts(query)
});

const getShortcut = (id) => ({
    type : 'GET_SHORTCUT',
    payload : getShortcut(id);
});


export { setShortcuts as fetchShortcuts , getShortcut }; 
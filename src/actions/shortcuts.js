import {fetchShortcuts,getShortcut as fetchShortcut} from '../services/shortcutsService';

 const setShortcuts = ({query} = {query:{sort:'trending'}}) => ({
    type: 'SET_SHORTCUTS',
    payload: fetchShortcuts(query)
});

const getShortcut = (id) => ({
    type : 'GET_SHORTCUT',
    payload : fetchShortcut(id)
});

const unselectShortcut = (id) => ({
    type : 'UNSELECT_SELECTED_SHORTCUT'
});


export { setShortcuts as fetchShortcuts , getShortcut , unselectShortcut}; 
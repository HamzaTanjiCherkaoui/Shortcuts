import {fetchShortcuts,getShortcut as fetchShortcut , createShortcut} from '../services/shortcutsService';

 const setShortcuts = ({query} = {query:{sort:'trending'}}) => ({
    type: 'SET_SHORTCUTS',
    payload: fetchShortcuts(query)
});

const getShortcut = (id) => ({
    type : 'GET_SHORTCUT',
    payload : fetchShortcut(id),
    mockData : id
});

const unselectShortcut = (id) => ({
    type : 'UNSELECT_SELECTED_SHORTCUT'
});

const addShortcut = (shortcut) => ({
    type : 'ADD_SHORTCUT',
    payload : createShortcut(shortcut)
});



export { setShortcuts as fetchShortcuts , getShortcut , unselectShortcut ,addShortcut }; 

const showModal = (name) => ({
    type : 'SHOW_MODAL',
    meta : {  name }
});

const hideModal = (name) => ({
    type : 'HIDE_MODAL',
    meta : { name }
});
const setOs = (osToSet) => ({
    type : 'SET_OS',
    meta : { osToSet }
});
const setDisplayBy = (displayBy) => ({
    type : 'SET_DISPLAYBY',
    meta : { displayBy }
});
export {showModal, hideModal , setOs , setDisplayBy};
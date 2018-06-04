
const showModal = (name) => ({
    type : 'SHOW_MODAL',
    meta : {  name }
});

const hideModal = (name) => ({
    type : 'HIDE_MODAL',
    meta : { name }
});
export {showModal, hideModal};
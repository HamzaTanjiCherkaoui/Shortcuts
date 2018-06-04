
const showModal = (name) => ({
    type : 'SHOW_MODAL',
    meta : { name : name }
});

const hideModal = (name) => ({
    type : 'HIDE_MODAL',
    meta : { name : name }
});
export {showModal, hideModal};
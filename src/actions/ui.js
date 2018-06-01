
const showModal = (name) => ({
    type : 'SHOW_'+name+'_MODAL',
    meta : { name : name }
});

const hideModal = (name) => ({
    type : 'HIDE_'+name+'_MODAL',
    meta : { name : name }
});
export {showModal, hideModal};
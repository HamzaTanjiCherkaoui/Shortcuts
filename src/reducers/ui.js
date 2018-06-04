const uiReducerState = {displayModal: [{name:"",action:''}] }

const uiReducer = (state = uiReducerState, action) => {
    //TODO handle the undefined handling outiside the component or see how to get ride of it
    if(action.meta === undefined)
    action.meta = {};
    switch (action.type) {
        case 'SHOW_MODAL': 
        return {
            ...state,
            displayModal:[{name : action.meta.name , show : true }]
        }
        case 'HIDE_MODAL': 
        return {
            ...state,
            displayModal:[{name : action.meta.name , show : false }]
        }
        default:
            return state;
    }
}

export default uiReducer;
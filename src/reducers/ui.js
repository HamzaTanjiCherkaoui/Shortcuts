const uiReducerState = {displayModal: [] }

const uiReducer = (state = uiReducerState, action) => {
    //TODO handle the undefined handling outiside the component or see how to get ride of it
    if(action.meta === undefined)
    action.meta = {};
    console.log(action.type);
    switch (action.type) {
        case 'SHOW_'+action.meta.name+'_MODAL': 
        return {
            ...state,
            displayModal:[{name : action.meta.name , show : true }]
        }
        case 'HIDE_'+action.meta.name+'_MODAL': 
        return {
            ...state,
            displayModal:[{name : action.meta.name , show : false }]
        }
        default:
            return state;
    }
}

export default uiReducer;
const uiReducerState = {displayModal: [{name:"",action:''}] , currentOs : 'win', displayBy:'shortcuts'}

const uiReducer = (state = uiReducerState, action) => {
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
        case 'SET_OS':
        return {
            ...state,
            currentOs : action.meta.osToSet
        }
        case 'SET_DISPLAYBY':
        return {
            ...state,
            displayBy : action.meta.displayBy
        }
        default:
            return state;
    }
}

export default uiReducer;
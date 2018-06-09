import {fetchShortcutsMock,getShortcutMock} from '../services/shortcutsService';
const ACTIONS_TO_MOCK = [
    {
        type: 'SET_SHORTCUTS',
        payload:fetchShortcutsMock
    },
    {
        type : 'GET_SHORTCUT',
        payload : getShortcutMock
    },
    {
        type: 'ADD_SHORTCUT',
         payload: null
    }
    ];

const mock = (on) => ({dispatch, getState}) => (next) => (action) => {
    let mockAction = action;
    if (on) {
        const currentAction = ACTIONS_TO_MOCK.find(ActionToMock => ActionToMock.type === action.type);
        if (currentAction) {
            mockAction.type += "_MOCK";
            if(action.mockData)
           { mockAction.payload =currentAction.payload(action.mockData);}
            else
            {mockAction.payload =currentAction.payload;}


        }
    }
    
    next(mockAction);

}
export default mock;

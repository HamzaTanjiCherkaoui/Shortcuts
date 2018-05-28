const shortcutsReducerDefaultState = [
]

const shortcutsReducer = (state = shortcutsReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SHORTCUTS':
        return [...state,...action.shortcuts];
        default:
            return state;
    }
}

export default shortcutsReducer;
const shortcutsMockReducerDefaultState = {
    shortcuts: [],
    fetching: false,
    fetched: false,
    failed: false,
    selectedShortcut: {},
    loadingSelectedShortcut: false
}

const shortcutsReducer = (state = shortcutsMockReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_SHORTCUTS_MOCK_PENDING':

            return {
                ...state,
                shortcuts: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case 'SET_SHORTCUTS_MOCK_FULFILLED':
            return {
                ...state,
                shortcuts: state
                    .shortcuts
                    .concat(action.payload),
                fetching: false,
                fetched: true,
                failed: false
            };
        case 'SET_SHORTCUTS_REJECTED':
            return {
                ...state,
                shortcuts: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        case 'GET_SHORTCUT_MOCK_PENDING':
            return {
                ...state,
                loadingSelectedShortcut: true
            }
        case 'GET_SHORTCUT_MOCK_FULFILLED':
            return {
                ...state,
                loadingSelectedShortcut: false,
                selectedShortcut: action.payload
            }
        case 'UNSELECT_SELECTED_SHORTCUT':
            return {
                ...state,
                loadingSelectedShortcut: false,
                selectedShortcut: {}
            }

        default:
            return state;
    }
}

export default shortcutsReducer;
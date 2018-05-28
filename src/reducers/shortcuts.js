const shortcutsReducerDefaultState = [
    {
        id: 1,
        buttons : ["Ctrl","A","Z"]
    }
]

const shortcutsReducer = (state = shortcutsReducerDefaultState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
}

export default shortcutsReducer;
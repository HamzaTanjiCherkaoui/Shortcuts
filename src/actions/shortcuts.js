export const setShortcuts = ({query} = {}) => ({
    type: 'SET_SHORTCUTS',
    shortcuts: [
        {
            id: 1,
            buttons: ["Ctrl", "A", "Z"]
        }, {
            id: 2,
            buttons: ["Ctrl", "C"]
        }
    ]
});
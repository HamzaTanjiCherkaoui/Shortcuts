import shortcuts from './shortcuts'

const simulateError = false;

export const fetchShortcuts = (query) => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of shortcuts ');
            } else {
                resolve(shortcuts);
            }
        }, 2000);
    });
};

export const getShortcut = (id) => {
    return new Promise((resolve, reject) => {
        // simulate lengthy service call
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of shortcut ');
            } else {
                resolve(shortcuts.find((s)=> s.id == id));
            }
        }, 2000);
    });
};
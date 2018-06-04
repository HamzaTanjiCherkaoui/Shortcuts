import shortcuts from './shortcuts'

const simulateError = false;

export const fetchShortcuts = (query) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of shortcuts ');
            } else {
                resolve(shortcuts);
            }
        }, 5000);
    });
};

export const getShortcut = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateError) {
                reject('Failed to fetch list of shortcut ');
            } else {
                resolve(shortcuts.find((s)=> s.id === id));
            }
        }, 300);
    });
};
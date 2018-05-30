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
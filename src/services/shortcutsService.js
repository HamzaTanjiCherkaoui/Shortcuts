import database from '../firebase/firebase';

export const fetchShortcuts = (query) => {
    return new Promise((resolve, reject) => {

        database
            .ref('shortcuts')
            .once('value')
            .then((snapshot) => {
                const shortcuts = [];
                snapshot.forEach((childSnapshot) => {
                    shortcuts.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })

                });
                resolve(shortcuts);
            });
    });
};

export const getShortcut = (id) => {
    return new Promise((resolve, reject) => {
        database
            .ref(`shortcuts/${id}`)
            .once('value')
            .then((snapshot) => {
                resolve({
                    id,
                    ...snapshot.val()
                });
            });
    });
};

export const createShortcut = (shortcut) => {
    return new Promise((resolve, reject) => {
        database
            .ref('shortcuts')
            .push(shortcut)
            .then(() => {
                resolve({status: "OK"})
            });

    });
};

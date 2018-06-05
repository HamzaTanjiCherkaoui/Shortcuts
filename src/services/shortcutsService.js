import shortcuts from './shortcuts'
import database from '../firebase/firebase';
const simulateError = false;

export const fetchShortcuts = (query) => {
    return new Promise((resolve, reject) => {

        database.ref('shortcuts').once('value').then((snapshot)=>{
            const shortcuts = [];
        snapshot.forEach((childSnapshot)=>{
        shortcuts.push({
            id : childSnapshot.key,
            ...childSnapshot.val()
        })
       
    });
    resolve(shortcuts);     
});      
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
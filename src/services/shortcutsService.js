import database ,{storageRef} from '../firebase/firebase';
import shortcuts from './shortcuts';

export const fetchShortcutsMock = (query) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(shortcuts)},2000);
    });
}
export const getShortcutMock = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(shortcuts[id])},2000);
    });
}
export const fetchShortcuts = (query) => {
    return new Promise((resolve, reject) => {

        database
            .ref('shortcuts')
            .orderByChild("visible").equalTo(true)
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
        const task = storageRef.put(shortcut.imageFile);
        task.on("state_changed",function(snapshot){
            const percentage= (snapshot.bytesTransferred/ snapshot.totalBytes) *100;
            if(percentage===100){
                storageRef.getDownloadURL().then(function (url) {
                  const {label,description,visible,buttons,selectedOs} = shortcut;
                  database.ref('suggestedShortcuts').push({buttons,description,label,imageFile:url,visible,selectedOs}).then(function(){
                    resolve({status: "OK"})
                 });
                });
            }
         });

    });
};

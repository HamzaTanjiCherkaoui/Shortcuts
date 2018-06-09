import database ,{storageRef} from '../firebase/firebase';
import shortcuts from './shortcuts';
let NEXT_KEY = [];
NEXT_KEY[0] = "-LEDKEjNLpgBtyWt2bST";
let page = 0;
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
    console.log(query);
    
        if(query && query.page)
        {
            console.log(NEXT_KEY,query.page,page);
            page = query.page;
            if(!query.isNext && page!==0)
            page=(page-2<0)?0:page-2;

        }
    return new Promise((resolve, reject) => {
        database
            .ref('shortcuts')
            .orderByKey()
            .limitToFirst(30).startAt(NEXT_KEY[page])
            .once('value')
            .then((snapshot) => {
                const shortcuts = [];
                let snapshotKeysArray = Object.keys(snapshot.val());
                if((query && query.isNext) || page===0)
                NEXT_KEY[page+1] = snapshotKeysArray[snapshotKeysArray.length-1];
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

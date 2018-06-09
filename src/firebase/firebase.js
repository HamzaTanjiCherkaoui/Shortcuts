import * as firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const storageRef = firebase.storage().ref().child("myImage.png");
// const alphabets = "ABCDEFJHIJKLMNOPQRSTUVWXYZ".split('');
// const ctrlOrShift= ['Ctrl','shift'];

// alphabets.forEach(a => {
//     let rand = Math.floor(Math.random() * alphabets.length);
//     let alternate = Math.floor(Math.random() * 1);
//     database.ref('shortcuts').push(
//         {
//             "buttons": {
//                 "win":[ctrlOrShift[alternate] ,alphabets[rand]]
//             },
//             "description" :`lorem ipsum dollor ipsum  
//             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata`,
//             "label" : "Zoom In 1",
//             "visible" : true,
//             "gif" : "shortcut.gif",
//             "software" : "illustrator"
//         }  
//     ); 
    
// })
// database.ref('shortcuts').push(
//     {
//         "buttons": ["Shift" ,"U"],
//         "description" :"lorem ipsum dollor",
//         "label" : "Zoom Out 1",
//         "gif" : "shortcut.gif"
//     }
// );

export {firebase ,storageRef,  database as default };




// database.ref('notes').push({
//     title :'First note',
//     body :'This is my note'
// });
    
// database.ref().set({
//         name: "Hamza Tanji Cherkaoui",
//         age: 24,
//         isSingle: false,
//         location: {
//             city: "Casablanca",
//             country: "morocco"
//         }

//     }).then(()=>{
//         console.log('Data is saved');
//     }).catch((e)=>{
//         console.log('This failed',e);
//     });
//    database.ref().update({
//        name :"Mike",
//        age : 29,
//        job :'Software developer'
//    });
// database.ref().remove().then(()=>{
//             console.log('Data was removed');
//         }).catch((e)=>{
//             console.log('This failed',e);
//         });

// database.ref().on('value', (snapshot)=>{
//     const val =snapshot.val();
//     console.log('data',val);
// }
// );

// setTimeout(()=>{
// database.ref('age').set(28);
// },3500)
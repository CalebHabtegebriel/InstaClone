import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDX0e0ILGNs18cc31wgfXMzZLpnoDsF774",
    authDomain: "instagram-clone-113d1.firebaseapp.com",
    databaseURL: "https://instagram-clone-113d1.firebaseio.com",
    projectId: "instagram-clone-113d1",
    storageBucket: "instagram-clone-113d1.appspot.com",
    messagingSenderId: "745687720199",
    appId: "1:745687720199:web:d6439ec8dd97fa0064e5a2",
    measurementId: "G-6QLH70B05K"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
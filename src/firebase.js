import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyANQSz3D9WZppUWdf7_nywV2Kbup7KHpUk",
    authDomain: "linked-in-clone-155e7.firebaseapp.com",
    projectId: "linked-in-clone-155e7",
    storageBucket: "linked-in-clone-155e7.appspot.com",
    messagingSenderId: "307075053146",
    appId: "1:307075053146:web:c85541f5d9cd9489df8a63"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
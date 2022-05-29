import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBV9fNy3RioK8WisjRy4yR5WFavAB2zQlQ",
    authDomain: "crwn-db-e964b.firebaseapp.com",
    projectId: "crwn-db-e964b",
    storageBucket: "crwn-db-e964b.appspot.com",
    messagingSenderId: "716399819047",
    appId: "1:716399819047:web:b748bbc2e5c25e6b5e5102",
    measurementId: "G-39FR116RBF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
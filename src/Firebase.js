// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASUzgsw0EbUPXpwnPEccBNebpUpXJNEaU",
  authDomain: "fb-clone-5e68f.firebaseapp.com",
  projectId: "fb-clone-5e68f",
  storageBucket: "fb-clone-5e68f.appspot.com",
  messagingSenderId: "531613955685",
  appId: "1:531613955685:web:94ebc526d586aa72c3f88c",
  measurementId: "G-LWD6TR2XMF",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;

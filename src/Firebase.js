
import firebase from "firebase"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  measurementId: "G-LWD6TR2XMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
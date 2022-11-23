// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAItdtUgwfKm2e_9m8cEITk95w1GZhJxPQ",
  authDomain: "carrybagsdashboard.firebaseapp.com",
  projectId: "carrybagsdashboard",
  storageBucket: "carrybagsdashboard.appspot.com",
  messagingSenderId: "622016218507",
  appId: "1:622016218507:web:f810c549576d4ddc765b8e",
  measurementId: "G-XEHEBVXZY2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { app, firebase, db };

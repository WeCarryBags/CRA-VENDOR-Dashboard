import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

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
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
//const analytics = getAnalytics(app);

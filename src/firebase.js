// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Wh4VCddBoEJFOHXCWBeqfl9xdgpO8ec",
  authDomain: "myportfolio-2bf4d.firebaseapp.com",
  projectId: "myportfolio-2bf4d",
  storageBucket: "myportfolio-2bf4d.appspot.com",
  messagingSenderId: "3184970158",
  appId: "1:3184970158:web:e369e31e2641757be3203f",
  measurementId: "G-87Y0JL7631",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
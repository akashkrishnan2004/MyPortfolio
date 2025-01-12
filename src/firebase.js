// Main code
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC-Wh4VCddBoEJFOHXCWBeqfl9xdgpO8ec",
//   authDomain: "myportfolio-2bf4d.firebaseapp.com",
//   projectId: "myportfolio-2bf4d",
//   storageBucket: "myportfolio-2bf4d.firebasestorage.app",
//   messagingSenderId: "3184970158",
//   appId: "1:3184970158:web:e369e31e2641757be3203f",
//   measurementId: "G-87Y0JL7631"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const firestore = getFirestore(app);
// 
// 

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




// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// export { firestore };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wj4FrJL2SXxirmjj4aCDrj46TXTsq0Y",
  authDomain: "fiorucci-dafcb.firebaseapp.com",
  projectId: "fiorucci-dafcb",
  storageBucket: "fiorucci-dafcb.appspot.com",
  messagingSenderId: "1022213036025",
  appId: "1:1022213036025:web:95b81808773aab54ac4f28",
  measurementId: "G-4MFGMCJ2F6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
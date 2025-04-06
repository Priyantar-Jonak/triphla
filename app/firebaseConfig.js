// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmyBNLyP8SPlb9c1TqN8hH7yJO7kg3mb0",
  authDomain: "triphla-f5e2f.firebaseapp.com",
  projectId: "triphla-f5e2f",
  storageBucket: "triphla-f5e2f.firebasestorage.app",
  messagingSenderId: "516031161427",
  appId: "1:516031161427:web:180b17c5c5a112e438d2a6",
  measurementId: "G-MF6571RW3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
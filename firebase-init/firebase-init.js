// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjnvStFvfPIdmYyhh_1cgKXFhQLBPGvwo",
  authDomain: "email-password-authentic-7d18b.firebaseapp.com",
  projectId: "email-password-authentic-7d18b",
  storageBucket: "email-password-authentic-7d18b.firebasestorage.app",
  messagingSenderId: "310913768991",
  appId: "1:310913768991:web:61d389e0d2d2be09db3f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);  
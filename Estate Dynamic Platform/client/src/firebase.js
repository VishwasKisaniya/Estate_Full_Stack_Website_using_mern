// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-6d067.firebaseapp.com",
  projectId: "estate-6d067",
  storageBucket: "estate-6d067.appspot.com",
  messagingSenderId: "988402844148",
  appId: "1:988402844148:web:b9258f576fa505f5e939a1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

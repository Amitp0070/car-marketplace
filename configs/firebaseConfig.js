// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketcity.firebaseapp.com",
  projectId: "car-marketcity",
  storageBucket: "car-marketcity.appspot.com",
  messagingSenderId: "659835775631",
  appId: "1:659835775631:web:616b8b4a304bd940855efa",
  measurementId: "G-Q3ZVLZ6ZS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);

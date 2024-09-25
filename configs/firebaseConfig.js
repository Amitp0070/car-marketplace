// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-ff486.firebaseapp.com",
  projectId: "car-marketplace-ff486",
  storageBucket: "car-marketplace-ff486.appspot.com",
  messagingSenderId: "1096201453285",
  appId: "1:1096201453285:web:ded4f2cf937f1620d0de0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
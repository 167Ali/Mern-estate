// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a79ab.firebaseapp.com",
  projectId: "mern-estate-a79ab",
  storageBucket: "mern-estate-a79ab.appspot.com",
  messagingSenderId: "17947868564",
  appId: "1:17947868564:web:9f06ca2345ef0d9ff4e381"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
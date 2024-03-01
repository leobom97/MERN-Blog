// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1f338.firebaseapp.com",
  projectId: "mern-blog-1f338",
  storageBucket: "mern-blog-1f338.appspot.com",
  messagingSenderId: "772282018726",
  appId: "1:772282018726:web:4da2d61e681dd06517fd67",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

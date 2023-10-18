// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcXJ7dSWH68kCAnWVFIJZXCkrtciNGbe4",
  authDomain: "fullstack-basic.firebaseapp.com",
  projectId: "fullstack-basic",
  storageBucket: "fullstack-basic.appspot.com",
  messagingSenderId: "650440483024",
  appId: "1:650440483024:web:702029e376fc9968307ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default(app);
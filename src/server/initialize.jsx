// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyACq0voNZqF_qXUAdYbdhzcs3rC16frlT4",
  authDomain: "teco-next-3078e.firebaseapp.com",
  projectId: "teco-next-3078e",
  storageBucket: "teco-next-3078e.appspot.com",
  messagingSenderId: "607229632210",
  appId: "1:607229632210:web:88ef7f87b29de22709d70b",
  measurementId: "G-6F0WZRS54T"
});
export const analytics = getAnalytics(app);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

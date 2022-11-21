import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_midUdm56dvb9HTjiwOPxDFCA78j8pHw",
  authDomain: "plantasacuaticas-caporaso.firebaseapp.com",
  projectId: "plantasacuaticas-caporaso",
  storageBucket: "plantasacuaticas-caporaso.appspot.com",
  messagingSenderId: "370224692533",
  appId: "1:370224692533:web:8012c1fd4ab283325e207c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

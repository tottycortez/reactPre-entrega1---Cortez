import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCukDlwpoc8OT3lFhzVlR8TaWTNyLF1xlE",
  authDomain: "star-fanswars.firebaseapp.com",
  projectId: "star-fanswars",
  storageBucket: "star-fanswars.appspot.com",
  messagingSenderId: "1004778051936",
  appId: "1:1004778051936:web:f534464192fdadf74a6605"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
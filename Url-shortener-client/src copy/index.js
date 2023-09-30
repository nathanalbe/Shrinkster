import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHBxWlvngXUs0_Uyir8HRPeV6EGK-oppc",
  authDomain: "url-shortner-ad56c.firebaseapp.com",
  databaseURL: "https://url-shortner-ad56c-default-rtdb.firebaseio.com",
  projectId: "url-shortner-ad56c",
  storageBucket: "url-shortner-ad56c.appspot.com",
  messagingSenderId: "941716292101",
  appId: "1:941716292101:web:c947e545b71e0ca5f5926c",
  measurementId: "G-8BPS78K7YN"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
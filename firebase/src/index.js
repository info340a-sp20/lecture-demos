import React from 'react';
import ReactDOM from 'react-dom';
//added 1
import firebase from 'firebase/app';     //add firebase - give us access to the global firebase variable


//added 2
import 'firebase/auth';     //gives us access to the auth stuff so it will turn on the firebase auth features

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './style.css';
import App from './App';

// //added 1
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBgYl1nMeMRr8JRhnlGB_HviBeqP2l0hiY",
    authDomain: "info340a-sp20-demo-60814.firebaseapp.com",
    databaseURL: "https://info340a-sp20-demo-60814.firebaseio.com",
    projectId: "info340a-sp20-demo-60814",
    storageBucket: "info340a-sp20-demo-60814.appspot.com",
    messagingSenderId: "737849550708",
    appId: "1:737849550708:web:17290b47a97f6c0397ae21"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
ReactDOM.render(<App />, document.getElementById('root'));
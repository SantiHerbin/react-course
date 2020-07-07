import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAih8on24FMayuXvS97eJMkNpCFiosvUic",
    authDomain: "fb-crud-react-d2dc8.firebaseapp.com",
    databaseURL: "https://fb-crud-react-d2dc8.firebaseio.com",
    projectId: "fb-crud-react-d2dc8",
    storageBucket: "fb-crud-react-d2dc8.appspot.com",
    messagingSenderId: "1038838621065",
    appId: "1:1038838621065:web:2205fbaa3124346eb13758"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
import  firebase  from "firebase/compat/app";

import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOUxUt6xe82CLj9O-K6Fm4JD_tb_QhAkA",
    authDomain: "tinder-3fd49.firebaseapp.com",
    projectId: "tinder-3fd49",
    storageBucket: "tinder-3fd49.appspot.com",
    messagingSenderId: "18178023018",
    appId: "1:18178023018:web:84151635624f1f2b6d3413",
    measurementId: "G-HYPF074WFH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

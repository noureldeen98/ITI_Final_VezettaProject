// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyACcqVbcyts0Yzwdo_-6LeN_Pw_U_LA8Ng",
    // authDomain: "vezeeta-website-db.firebaseapp.com",
    // databaseURL: "https://vezeeta-website-db-default-rtdb.firebaseio.com",
    // projectId: "vezeeta-website-db",
    // storageBucket: "vezeeta-website-db.appspot.com",
    // messagingSenderId: "118999132560",
    // appId: "1:118999132560:web:117741d75c1a3c81d42b15"
    apiKey: "AIzaSyDuF-U97KSyVZ6BsZHVvR2ATFiMBRbmtVk",
    authDomain: "testdb-92858.firebaseapp.com",
    projectId: "testdb-92858",
    storageBucket: "testdb-92858.appspot.com",
    messagingSenderId: "1015433522415",
    appId: "1:1015433522415:web:5e9917f3baa8df398f3f1a"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  const auth = firebase.auth();
  export {db,auth};
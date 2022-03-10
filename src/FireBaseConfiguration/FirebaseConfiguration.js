// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import store from '../ReactRedux/Store/myStore'
// import axios from "axios";
// import { changeLoader } from '../ReactRedux/Actions/loaderAction'

const firebaseConfig = {
    apiKey: "AIzaSyACcqVbcyts0Yzwdo_-6LeN_Pw_U_LA8Ng",
    authDomain: "vezeeta-website-db.firebaseapp.com",
    databaseURL: "https://vezeeta-website-db-default-rtdb.firebaseio.com",
    projectId: "vezeeta-website-db",
    storageBucket: "vezeeta-website-db.appspot.com",
    messagingSenderId: "118999132560",
    appId: "1:118999132560:web:117741d75c1a3c81d42b15"
    // apiKey: "AIzaSyDuF-U97KSyVZ6BsZHVvR2ATFiMBRbmtVk",
    // authDomain: "testdb-92858.firebaseapp.com",
    // projectId: "testdb-92858",
    // storageBucket: "testdb-92858.appspot.com",
    // messagingSenderId: "1015433522415",
    // appId: "1:1015433522415:web:5e9917f3baa8df398f3f1a"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  // axios.interceptors.request.use(
  //   function (config) {
  //     store.dispatch(changeLoader(true));

  //     config.headers = {
  //       token: "fdn54545cjhbv587",
  //       "content-type": "application/json",
  //     };
  //     console.log(config);
  //     return config;
  
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // )
  // axios.interceptors.response.use(
  //   function (response) {
  //     //related response
  
  //     store.dispatch(changeLoader(false));
  
  //     return response;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // )
  export {db,auth,storage};
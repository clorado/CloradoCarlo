import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDXIZBV5Tw48_TtwBo7tBgQrDNr4sQNqag",
    authDomain: "carlo-crud.firebaseapp.com",
    projectId: "carlo-crud",
    storageBucket: "carlo-crud.appspot.com",
    messagingSenderId: "1002063513385",
    appId: "1:1002063513385:web:47bfec41a2f6a202111938"
  };
  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
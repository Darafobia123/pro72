import firebase from "firebase";
require("@firebase/firestore");
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1OCtuR356a423Jco83dsF7fFtLjDKg3A",
    authDomain: "project-72-53e53.firebaseapp.com",
    projectId: "project-72-53e53",
    storageBucket: "project-72-53e53.appspot.com",
    messagingSenderId: "907047148984",
    appId: "1:907047148984:web:7a7ae2df4b9b21ec2c834d",
    measurementId: "G-VJK3H7F9GC"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

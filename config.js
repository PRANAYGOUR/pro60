import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyAENM5zz8U7lubZiOKgSNhaHiZkZrV5vnQ",
    authDomain: "school-attendance-81120.firebaseapp.com",
    projectId: "school-attendance-81120",
    storageBucket: "school-attendance-81120.appspot.com",
    messagingSenderId: "962836231237",
    appId: "1:962836231237:web:75050531e317b1c5181f2c",
    measurementId: "G-5346XVYKT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


export default firebase.database();
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDPC7enCKSKWPiMeZoqoTxxqUTvPc6WNjE",
    authDomain: "linkedin-clone-5d51d.firebaseapp.com",
    projectId: "linkedin-clone-5d51d",
    storageBucket: "linkedin-clone-5d51d.appspot.com",
    messagingSenderId: "100989336596",
    appId: "1:100989336596:web:69adb3fdeaf2a753f8fb01"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };
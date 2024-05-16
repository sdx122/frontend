
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/database";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAguvsiwiTXe5SvXjvRpsG44DqmvqfINmw",
  authDomain: "clone-project-e72a6.firebaseapp.com",
  projectId: "clone-project-e72a6",
  storageBucket: "clone-project-e72a6.appspot.com",
  messagingSenderId: "822509866207",
  appId: "1:822509866207:web:6c1d7d043e85a077b3ad6a",
  measurementId: "G-VEWWQKRQVL"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
  export default firebaseApp;
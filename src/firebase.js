import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbVxPpK67cl9vFRg8mP3Vo_kJuo4KDdtg",
    authDomain: "whatsapp-clone-71a9d.firebaseapp.com",
    projectId: "whatsapp-clone-71a9d",
    storageBucket: "whatsapp-clone-71a9d.appspot.com",
    messagingSenderId: "291280163348",
    appId: "1:291280163348:web:2fef3daee96ff34c2fcd01",
    measurementId: "G-WTYHDSQE52"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  
  const db = app.firestore();
  
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, googleProvider };
  
  export default db;
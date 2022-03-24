import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCChluD-22ZaJF8a-o42aBMFYbGFeYTnBU",
  authDomain: "social-media-app-c7f2d.firebaseapp.com",
  projectId: "social-media-app-c7f2d",
  storageBucket: "social-media-app-c7f2d.appspot.com",
  messagingSenderId: "329508877914",
  appId: "1:329508877914:web:df786a541a124aa9328a63",
  measurementId: "G-85T205THG2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;




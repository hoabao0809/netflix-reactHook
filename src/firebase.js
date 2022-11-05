import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYu154cFh7pPW__6TCj4m2c4TaBdsmLmU',
  authDomain: 'netflix-build-1a14d.firebaseapp.com',
  projectId: 'netflix-build-1a14d',
  storageBucket: 'netflix-build-1a14d.appspot.com',
  messagingSenderId: '860422522601',
  appId: '1:860422522601:web:872622002c2b9982f55278',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

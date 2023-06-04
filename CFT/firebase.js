import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzy4xfjDQOgCXNr7UNLnCMzHSOD7SmrwM",
  authDomain: "carbon-footprint-tracker-b7817.firebaseapp.com",
  projectId: "carbon-footprint-tracker-b7817",
  storageBucket: "carbon-footprint-tracker-b7817.appspot.com",
  messagingSenderId: "461462259677",
  appId: "1:461462259677:web:0e428081a455e14fe11834",
  measurementId: "G-6X68EKB6SF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
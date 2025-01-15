import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXnMmP7_yuyKAGmcqlyyG9q9GyxswePwE",
  authDomain: "mezzanine-crm.firebaseapp.com",
  projectId: "mezzanine-crm",
  storageBucket: "mezzanine-crm.appspot.com",
  messagingSenderId: "686808061550",
  appId: "1:686808061550:web:your-app-id"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

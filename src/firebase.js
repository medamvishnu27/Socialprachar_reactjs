import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // Accessing the API key from environment variables
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, // Use process.env
  appId: process.env.REACT_APP_FIREBASE_APP_ID, // Use process.env
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID // Use process.env
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { collection, addDoc };







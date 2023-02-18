import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB05ZGdbTJ4bcukvVO3J0_c4dLFrtmbIJc",
  authDomain: "firetu-9fd88.firebaseapp.com",
  projectId: "firetu-9fd88",
  storageBucket: "firetu-9fd88.appspot.com",
  messagingSenderId: "797872658597",
  appId: "1:797872658597:web:f8ca57fe4b81e500c1154c",
  measurementId: "G-QWB5PSN89G",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

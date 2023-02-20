import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  MEASUREMENT_ID,
  MESSAGGIN_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "@env";

// Firebase config
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGGIN_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

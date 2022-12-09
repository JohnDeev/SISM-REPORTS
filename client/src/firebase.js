import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAxtAjOdUqXV-_mEuZwx_qnrO721NHRU5I",
  authDomain: "sism-reports.firebaseapp.com",
  databaseURL: "https://sism-reports-default-rtdb.firebaseio.com",
  projectId: "sism-reports",
  storageBucket: "sism-reports.appspot.com",
  messagingSenderId: "72044544380",
  appId: "1:72044544380:web:56eac643e59b2f2cc8e4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

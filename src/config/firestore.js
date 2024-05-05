// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJoie_o-Gpa4TcDLp_7Io6VjpOLfYNwro",
  authDomain: "lego-store-f951d.firebaseapp.com",
  projectId: "lego-store-f951d",
  storageBucket: "lego-store-f951d.appspot.com",
  messagingSenderId: "23651601037",
  appId: "1:23651601037:web:e720f925175e43f610b0c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

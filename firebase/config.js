// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpp2q1e-U5C-VOPmPESQ_M6bGQGoRnrg",
  authDomain: "reservaancestral-96c1b.firebaseapp.com",
  projectId: "reservaancestral-96c1b",
  storageBucket: "reservaancestral-96c1b.appspot.com",
  messagingSenderId: "412066224523",
  appId: "1:412066224523:web:cc8a8d6d236d225266378e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

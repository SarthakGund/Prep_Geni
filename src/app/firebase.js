// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "prepgenie-f6c85.firebaseapp.com",
  projectId: "prepgenie-f6c85",
  storageBucket: "prepgenie-f6c85.appspot.com",
  messagingSenderId: "1047854373987",
  appId: "1:1047854373987:web:225c23d73cb0e56e272c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();

export const db = getFirestore(app);
export default app;
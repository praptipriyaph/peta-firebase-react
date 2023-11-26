// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGj7-cXdYWV5XTwozSW9OpZOZlQjUsKSc",
  authDomain: "peta-261e1.firebaseapp.com",
  projectId: "peta-261e1",
  storageBucket: "peta-261e1.appspot.com",
  messagingSenderId: "264858970126",
  appId: "1:264858970126:web:2000385ce8b44b8a91b45f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
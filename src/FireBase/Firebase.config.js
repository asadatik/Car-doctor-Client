// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_VIiISQH4zVyuxUDQYwVfU-D6S_shiw",
  authDomain: "doctors-of-car.firebaseapp.com",
  projectId: "doctors-of-car",
  storageBucket: "doctors-of-car.appspot.com",
  messagingSenderId: "573705578572",
  appId: "1:573705578572:web:27e8862010a2202073ece9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

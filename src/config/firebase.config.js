// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU95eLKJEEC18UzUOvtUfmAudAQUKLa14",
  authDomain: "milestone-11-conceptual.firebaseapp.com",
  projectId: "milestone-11-conceptual",
  storageBucket: "milestone-11-conceptual.appspot.com",
  messagingSenderId: "694038155975",
  appId: "1:694038155975:web:5d7a631aa7b483d36464e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
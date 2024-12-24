// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtuxN_-g-CyxhMNAQKjEZFC9xWQ2_Hdqw",
  authDomain: "netflixwatchwizardgpt.firebaseapp.com",
  projectId: "netflixwatchwizardgpt",
  storageBucket: "netflixwatchwizardgpt.firebasestorage.app",
  messagingSenderId: "874065232847",
  appId: "1:874065232847:web:27d5c3b058a6b8e0e6c8ba",
  measurementId: "G-BBPBESD3VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
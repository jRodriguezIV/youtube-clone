// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi3WYeX7mUwM4cN81hq3d7ySFbh77wbGE",
  authDomain: "clone-3ab4a.firebaseapp.com",
  projectId: "clone-3ab4a",
  storageBucket: "clone-3ab4a.appspot.com",
  messagingSenderId: "21986582423",
  appId: "1:21986582423:web:0928dce60b8425be13aed2",
  measurementId: "G-SEM6FLDD2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
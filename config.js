// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLe0hMoGK97SndOGIXwZulbk54xUNgRi8",
  authDomain: "my-portfolio-76a8d.firebaseapp.com",
  projectId: "my-portfolio-76a8d",
  storageBucket: "my-portfolio-76a8d.appspot.com",
  messagingSenderId: "320094002052",
  appId: "1:320094002052:web:3a55a24d7ff4253aaf9bd1",
  measurementId: "G-GSCKCYM9LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
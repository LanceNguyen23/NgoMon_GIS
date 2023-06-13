// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0HbCfRklniV8bb_CEDCmcKAB15mUPQ0",
  authDomain: "ngomonweb.firebaseapp.com",
  projectId: "ngomonweb",
  storageBucket: "ngomonweb.appspot.com",
  messagingSenderId: "832645232862",
  appId: "1:832645232862:web:3b65e06b82005c4b656a4f",
  measurementId: "G-30Y3PPSXTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
// const analytics = getAnalytics(app);

export const storage = getStorage(app);

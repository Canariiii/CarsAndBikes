// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qXwTZ1yHKU-FaJtGPw1dhtjNUDxyMuw",
  authDomain: "carsandbikes-18958.firebaseapp.com",
  databaseURL: "https://carsandbikes-18958-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "carsandbikes-18958",
  storageBucket: "carsandbikes-18958.appspot.com",
  messagingSenderId: "422821427080",
  appId: "1:422821427080:web:9a7abf3ca9a5811b412c3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export default database;

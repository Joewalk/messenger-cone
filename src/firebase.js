import firebase from "firebase";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBKMBrIYIhseGiuI219Ki5AD4_XJb5ziso",
  authDomain: "messenger-clone-2e354.firebaseapp.com",
  databaseURL: "https://messenger-clone-2e354.firebaseio.com",
  projectId: "messenger-clone-2e354",
  storageBucket: "messenger-clone-2e354.appspot.com",
  messagingSenderId: "660081316942",
  appId: "1:660081316942:web:ac581103c3cc4fe88cdf1f",
};

// Initializing firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Intializing DataBase
const db = firebaseApp.firestore();

export default db;

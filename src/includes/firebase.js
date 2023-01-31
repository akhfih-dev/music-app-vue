import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfKsm3G8LfJBQLbjNZPpP8ljYQooR1yAI",
  authDomain: "music-99b3b.firebaseapp.com",
  projectId: "music-99b3b",
  storageBucket: "music-99b3b.appspot.com",
  appId: "1:912199709792:web:5c2063af970e2aa8b9bf05",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

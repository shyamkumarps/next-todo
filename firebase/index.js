import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkQhg_KA1nV5gzgWZF738YCrF9ltgWDjw",
  authDomain: "next-todo-e548f.firebaseapp.com",
  projectId: "next-todo-e548f",
  storageBucket: "next-todo-e548f.appspot.com",
  messagingSenderId: "829786621824",
  appId: "1:829786621824:web:3f865ea4097338bc39a365",
  measurementId: "G-788QPZKP73"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

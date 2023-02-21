import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8IQk-tse2NXK68xtmVd7xBuO7og9ygsA",
  authDomain: "curso-reactjs-47042.firebaseapp.com",
  projectId: "curso-reactjs-47042",
  storageBucket: "curso-reactjs-47042.appspot.com",
  messagingSenderId: "163139316319",
  appId: "1:163139316319:web:251cba1f2fcc2057ea89ea",
  measurementId: "G-4J8MGDY9G2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

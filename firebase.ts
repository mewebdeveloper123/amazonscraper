import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmBS3U18TjqELfj0h1hlbpqY9b0UKgdgk",
  authDomain: "bright-data-501ec.firebaseapp.com",
  projectId: "bright-data-501ec",
  storageBucket: "bright-data-501ec.appspot.com",
  messagingSenderId: "736658515347",
  appId: "1:736658515347:web:30b48655d9ab03ce7e7466",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

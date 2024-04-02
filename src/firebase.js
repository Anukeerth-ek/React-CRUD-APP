import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAD9AP-gAda5hsiYwRpRHd82XnkT2ANtf4",
  authDomain: "admin-dashboard-66f67.firebaseapp.com",
  projectId: "admin-dashboard-66f67",
  storageBucket: "admin-dashboard-66f67.appspot.com",
  messagingSenderId: "580378835219",
  appId: "1:580378835219:web:94bf3f627d91b52b1ac2e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);
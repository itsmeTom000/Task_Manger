// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-be372.firebaseapp.com",
  projectId: "taskmanager-be372",
  storageBucket: "taskmanager-be372.appspot.com", // ✅ Fixed storage bucket
  messagingSenderId: "541005489632",
  appId: "1:541005489632:web:4d73045b5b88b28b39f785",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// ✅ Correct exports
export { app, storage };

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYUZKafAeIBqeX3251OAogN_lIpRUt0dU",
  authDomain: "nysc-backend.firebaseapp.com",
  projectId: "nysc-backend",
  storageBucket: "nysc-backend.firebasestorage.app",
  messagingSenderId: "538426365974",
  appId: "1:538426365974:web:038145797e76891bbcfd37",
  measurementId: "G-9GS2QV3FYD"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Web-only Auth (Expo Go compatible)
export const auth = getAuth(app);

export default app;

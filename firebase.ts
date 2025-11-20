import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import Constants from "expo-constants";

if (!Constants.expoConfig?.extra) {
  throw new Error("Missing Expo config 'extra' in app config (Constants.expoConfig.extra)");
}
const extra = Constants.expoConfig.extra;

const firebaseConfig = {
  apiKey: extra.firebaseApiKey,
  authDomain: extra.firebaseAuthDomain,
  projectId: extra.firebaseProjectId,
  storageBucket: extra.firebaseStorageBucket,
  messagingSenderId: extra.firebaseMessagingSenderId,
  appId: extra.firebaseAppId,
  measurementId: extra.firebaseMeasurementId
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Web-only Auth (Expo Go compatible)
export const auth = getAuth(app);

export default app;

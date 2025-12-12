
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRDeIu3NGQ4HsekLAr4kqHF3Im07FUDY",
  authDomain: "tomsafaris-64de6.firebaseapp.com",
  projectId: "tomsafaris-64de6",
  storageBucket: "tomsafaris-64de6.firebasestorage.app",
  messagingSenderId: "160811556924",
  appId: "1:160811556924:web:10a77899029c8f34da6339"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with settings to improve reliability and offline support
// experimentalForceLongPolling helps in environments where WebSockets are blocked or unstable
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  }),
  experimentalForceLongPolling: true,
});

const storage = getStorage(app);
const auth = getAuth(app);

// Export them for use in other parts of the app
export { db, storage, auth };

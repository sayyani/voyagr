// firebase-app.js

// Import SDKs from Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Your Firebase config (replace with your project details)
const firebaseConfig = {
  apiKey: "AIzaSyBeomEAx67yVmiJUTj5vFXyzCf3NIsGTgA",
  authDomain: "voyagr-66498.firebaseapp.com",
  projectId: "voyagr-66498",
  storageBucket: "voyagr-66498.firebasestorage.app",
  messagingSenderId: "588616720819",
  appId: "1:588616720819:web:04c81f0dd3c2ff6a8b6bc6",
  measurementId: "G-RPGWWJRGPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

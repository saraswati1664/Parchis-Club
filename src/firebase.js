// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaSMkC8qYuS2pSNrVCRzZFAfJhJYWDL9o",
  authDomain: "gaming-club-be1ed.firebaseapp.com",
  projectId: "gaming-club-be1ed",
  storageBucket: "gaming-club-be1ed.firebasestorage.app",
  messagingSenderId: "124427881945",
  appId: "1:124427881945:web:1acd8e112ecb6e94db9dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

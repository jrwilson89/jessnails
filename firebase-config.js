// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWQ7omdG6SH8RbMHNnvB4TER7G9vLEVB8",
  authDomain: "jess-nails-9e179.firebaseapp.com",
  projectId: "jess-nails-9e179",
  storageBucket: "jess-nails-9e179.firebasestorage.app",
  messagingSenderId: "983268556246",
  appId: "1:983268556246:web:7d66dce2d08a222cb43877"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };

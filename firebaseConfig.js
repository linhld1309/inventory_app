import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_yJWJkCB_QKKSKrA-0eT2151Ww3i9JK4",
  authDomain: "inventory-management-ca658.firebaseapp.com",
  projectId: "inventory-management-ca658",
  storageBucket: "inventory-management-ca658.appspot.com",
  messagingSenderId: "532753433226",
  appId: "1:532753433226:web:8ba1abfdc1debc9fc66373",
  measurementId: "G-R01WV0P132"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNP3tFOi_zsvm4bxlnQHFcS-J-uxZwK5E",
  authDomain: "react-netflix-clone-848e3.firebaseapp.com",
  projectId: "react-netflix-clone-848e3",
  storageBucket: "react-netflix-clone-848e3.appspot.com",
  messagingSenderId: "1004521710252",
  appId: "1:1004521710252:web:88f3a23e7d4f291fa17509",
  measurementId: "G-CRY7RBK4WM",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

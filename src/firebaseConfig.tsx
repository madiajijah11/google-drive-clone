// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCARwECsLRq8Ql3fykkeqec2DLsIxxJFE8",
  authDomain: "drive-clone-ce479.firebaseapp.com",
  projectId: "drive-clone-ce479",
  storageBucket: "drive-clone-ce479.appspot.com",
  messagingSenderId: "616919571270",
  appId: "1:616919571270:web:60cc14d2f26553c96d6347",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);

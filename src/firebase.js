// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxAk7Ox5NdtxW2WV68ey1n4Lfj9jiFZs",
  authDomain: "conversnow-img-upload.firebaseapp.com",
  projectId: "conversnow-img-upload",
  storageBucket: "conversnow-img-upload.appspot.com",
  messagingSenderId: "386600292953",
  appId: "1:386600292953:web:a681b786c8c8b43f041748",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
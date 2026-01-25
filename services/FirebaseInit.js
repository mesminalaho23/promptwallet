// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFeieAxf1juLU6WewCHugNjcSpH-PxY5o",
  authDomain: "prompt-wallet-b6239.firebaseapp.com",
  projectId: "prompt-wallet-b6239",
  storageBucket: "prompt-wallet-b6239.firebasestorage.app",
  messagingSenderId: "110499539810",
  appId: "1:110499539810:web:91fb14ec7a14f80cdfda3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
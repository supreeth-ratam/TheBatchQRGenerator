
import { initializeApp } from "firebase/app";
import "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA0rcXBLVeBBM6leQBCgLPfE5-j01Obxg8",
  authDomain: "qtech-11440.firebaseapp.com",
  projectId: "qtech-11440",
  storageBucket: "qtech-11440.appspot.com",
  messagingSenderId: "222299700334",
  appId: "1:222299700334:web:e7904b5a65ec1d04257a7f",
  measurementId: "G-RY205H8TTR"
};

export const app = initializeApp(firebaseConfig)
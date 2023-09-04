import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrb6PRjmz0SpulAQNqycaoQbCKZfjf1Bg",
  authDomain: "chat-d5bde.firebaseapp.com",
  projectId: "chat-d5bde",
  storageBucket: "chat-d5bde.appspot.com",
  messagingSenderId: "653834140310",
  appId: "1:653834140310:web:27c4ffceef37cf0c2860b7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

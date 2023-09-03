import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB29y6BgX6kuLsnvGT_OIcVm0d84Ogz94",
  authDomain: "chat-ce14a.firebaseapp.com",
  projectId: "chat-ce14a",
  storageBucket: "chat-ce14a.appspot.com",
  messagingSenderId: "637040381365",
  appId: "1:637040381365:web:cf7aeee09e605b95a61dfc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA2s01pNyRCyno6RyX5T3hKUSN3pEpXlz8",
  authDomain: "tenshi-chat.firebaseapp.com",
  projectId: "tenshi-chat",
  storageBucket: "tenshi-chat.appspot.com",
  messagingSenderId: "10982461152",
  appId: "1:10982461152:web:4314d6a9be8141dcb20a85"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
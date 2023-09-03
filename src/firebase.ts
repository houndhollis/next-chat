import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCch7Xk_1FDM3Zi0NHVQfkMYhFJU9MtVeU",
  authDomain: "next-chat-d6bb7.firebaseapp.com",
  projectId: "next-chat-d6bb7",
  storageBucket: "next-chat-d6bb7.appspot.com",
  messagingSenderId: "616924142135",
  appId: "1:616924142135:web:6f342c8b3a21d9d873bdb2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db }
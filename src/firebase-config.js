import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// FIXA EN .env MAPP OCH LÄNKA ALLT DÄRIFRÅN ISTÄLLET
const firebaseConfig = {
    apiKey: "AIzaSyB6jCZ9ZoCl_nIq7SxpWSXtnzpZQ3VB7Bc",
    authDomain: "gym-grupp-2.firebaseapp.com",
    projectId: "gym-grupp-2",
    storageBucket: "gym-grupp-2.appspot.com",
    messagingSenderId: "233547249272",
    appId: "1:233547249272:web:988f01e062dfaade515f8d",
    measurementId: "G-6KEGR7MG1X"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
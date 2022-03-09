// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTTJerNdLXWGrYJjPSxawTU9YydtZvPRM",
    authDomain: "tienda-de-smartphones-cardozo.firebaseapp.com",
    projectId: "tienda-de-smartphones-cardozo",
    storageBucket: "tienda-de-smartphones-cardozo.appspot.com",
    messagingSenderId: "203493812307",
    appId: "1:203493812307:web:a2a0bb382946650988bea6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSWzRMlg4fp45iRo-qs-bw1e2Ixj1L9vA",
    authDomain: "grand-reunion-54ebb.firebaseapp.com",
    projectId: "grand-reunion-54ebb",
    storageBucket: "grand-reunion-54ebb.appspot.com",
    messagingSenderId: "622680697779",
    appId: "1:622680697779:web:7330bbddac61226d9779c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
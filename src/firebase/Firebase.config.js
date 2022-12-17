// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2OnpUYtFzU70KhNK-UQBBvDd7HzoTx8o",
    authDomain: "myprotfolio-ce812.firebaseapp.com",
    projectId: "myprotfolio-ce812",
    storageBucket: "myprotfolio-ce812.appspot.com",
    messagingSenderId: "924911213552",
    appId: "1:924911213552:web:5396b13b167e1b3e3adb35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
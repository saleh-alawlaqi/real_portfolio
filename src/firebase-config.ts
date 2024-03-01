import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4A1SEzT7jvdr4kMnBrVlVVpa9H7Xq4C4",
    authDomain: "portfolio-9601d.firebaseapp.com",
    projectId: "portfolio-9601d",
    storageBucket: "portfolio-9601d.appspot.com",
    messagingSenderId: "229412678533",
    appId: "1:229412678533:web:edede41eb3a1a049fa32ec",
    measurementId: "G-529WE80TKW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);

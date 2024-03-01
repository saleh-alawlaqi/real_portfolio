import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a list of cities from your database
async function getCities(db: Firestore) {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </NextUIProvider>
    </React.StrictMode>
);

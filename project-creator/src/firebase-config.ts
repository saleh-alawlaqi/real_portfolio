import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";

import { getStorage, ref, uploadBytes } from "firebase/storage";

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

export const storage = getStorage();
export const storageRef = ref(storage, "gs://portfolio-9601d.appspot.com");
// Function to upload file
export async function uploadFile(fileName: string, folderName: string, file: File) {
    // Create a storage reference

    const storageRef = ref(storage, `${folderName}/${fileName}.${file.name.split(".")[1]}`);

    // Upload the file
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
    });
}

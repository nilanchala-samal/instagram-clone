import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVbTlL_DfF5o6U6-fzvhn1AZlqyHTbR54",
    authDomain: "insta-clone-41e37.firebaseapp.com",
    projectId: "insta-clone-41e37",
    storageBucket: "insta-clone-41e37.appspot.com",
    messagingSenderId: "810496334350",
    appId: "1:810496334350:web:0860c7f63c73ba2682ba5f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
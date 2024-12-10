import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkDIooYKSpGn8hYqktzt6MA08u3YUG2ls",
  authDomain: "twitterclone-794b2.firebaseapp.com",
  projectId: "twitterclone-794b2",
  storageBucket: "twitterclone-794b2.appspot.com",
  messagingSenderId: "830679001540",
  appId: "1:830679001540:web:172a99a92c0511c4a51c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını al
export const auth = getAuth(app);

// google sağlayıcısını kur
export const provider = new GoogleAuthProvider();

// veritabanın referansını al
export const db = getFirestore(app);

// storage referansını al resimler için
export const storage = getStorage(app);
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDfmmadruh23LEqu_fP9H-r8xZeJYVqzSs",
  authDomain: "full-blog-app-30639.firebaseapp.com",
  projectId: "full-blog-app-30639",
  storageBucket: "full-blog-app-30639.firebasestorage.app",
  messagingSenderId: "69455068651",
  appId: "1:69455068651:web:b7ee08cb5be829f0ca2dae"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqFsJ06KFsd9MEtFMEMwuwIrLUpvTHeM",
  authDomain: "cottage-527e5.firebaseapp.com",
  projectId: "cottage-527e5",
  storageBucket: "cottage-527e5.appspot.com",
  messagingSenderId: "809473782864",
  appId: "1:809473782864:web:9c3e3e8084207439bd8d55",
  measurementId: "G-TVF5KX0NRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyCQqcGF3In-Ky7YShGwc8btHgjm_5YYZbE",
  authDomain: "authDomain",
  projectId: "acoy-1fede",
  storageBucket: "acoy-1fede.appspot.com",
  messagingSenderId: "sendrId",
  appId: "appId"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, firebase, storage, auth, db }
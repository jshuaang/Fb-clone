// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljZNE9b2jCpXgHQCHKdliDLBKpT9njvI",
  authDomain: "fb-clone-77848.firebaseapp.com",
  projectId: "fb-clone-77848",
  storageBucket: "fb-clone-77848.appspot.com",
  messagingSenderId: "1047353739956",
  appId: "1:1047353739956:web:7ba393a1b87fcaaa8b25e1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app)
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const storage = app.storage()

export {db, storage}
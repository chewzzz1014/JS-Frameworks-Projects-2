// Import the functions you need from the SDKs you need
import { initializeApp, firestore } from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeO05Vt16Xihf-ki3byY3-pTUlih7GhXw",
  authDomain: "vuefireblog-666aa.firebaseapp.com",
  projectId: "vuefireblog-666aa",
  storageBucket: "vuefireblog-666aa.appspot.com",
  messagingSenderId: "168453620120",
  appId: "1:168453620120:web:753a7ff58ae1bdc83e6bed"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const timestamp = firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJLnDuMLD4db-_bX2ILOPmWjQKgVgupJw",
  authDomain: "whatsappclone-55e4d.firebaseapp.com",
  databaseURL: "https://whatsappclone-55e4d.firebaseio.com",
  projectId: "whatsappclone-55e4d",
  storageBucket: "whatsappclone-55e4d.appspot.com",
  messagingSenderId: "856953802039",
  appId: "1:856953802039:web:ce69e6be766f6ee64d5eb2",
  measurementId: "G-LV6G6W6NHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
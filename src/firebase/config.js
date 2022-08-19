import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "mymoney-wallet-b9103.firebaseapp.com",
  projectId: "mymoney-wallet-b9103",
  storageBucket: "mymoney-wallet-b9103.appspot.com",
  messagingSenderId: "751694315632",
  appId: API_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

//timestamp
const timestamp = firebase.firestore.Timestamp;

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth, timestamp };

import firebase from "firebase";

const config = {
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  apiKey: "AIzaSyB_VKchIgIG0s32FQENYBwo0GiNa5ZdKnA",
  databaseURL: "https://suizen.firebaseio.com",
  storageBucket: "suizen.appspot.com",
  messagingSenderId: "527312555663",
  appId: "1:527312555663:web:16140c97b427ac61052afa",
  measurementId: "G-TBZGXXRBNH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

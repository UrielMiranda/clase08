import firebase from "firebase";

const config = {
   //YOU KEY CONFIG
};
firebase.initializeApp(config);
export const db = firebase.firestore();
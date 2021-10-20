import * as firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjaRIPUzkp12qeeEaDlhfL1m1MLdjt-hM",
  authDomain: "tienda-flex-coelho.firebaseapp.com",
  projectId: "tienda-flex-coelho",
  storageBucket: "tienda-flex-coelho.appspot.com",
  messagingSenderId: "970192004008",
  appId: "1:970192004008:web:e3eb80ca742779566ab39d",
});

export function getFirebase() {
  return app;
}

export const getFirestore = () => {
  return firebase.firestore(app);
};

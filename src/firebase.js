import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUrmfM40LHrBzBIN8KhdKo45ASjYC2-ps",
  authDomain: "mountain-view-mushrooms.firebaseapp.com",
  projectId: "mountain-view-mushrooms",
  storageBucket: "mountain-view-mushrooms.appspot.com",
  messagingSenderId: "917752220525",
  appId: "1:917752220525:web:32358dfec707fc6ebb2864",
  measurementId: "G-PQ84LH2411",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

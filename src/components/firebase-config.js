import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK6E_p5snOPe4V7s3HzGFxxZofylChZM0",
  authDomain: "form-data-12a4c.firebaseapp.com",
  projectId: "form-data-12a4c",
  storageBucket: "form-data-12a4c.appspot.com",
  messagingSenderId: "169392162905",
  appId: "1:169392162905:web:94cc2bedef09874b6e0948"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

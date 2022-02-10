import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBM1VA0u57B2WXnb0i-RhuJ1MKWVEEuaXg",
  authDomain: "auth-development-6eadd.firebaseapp.com",
  projectId: "auth-development-6eadd",
  storageBucket: "auth-development-6eadd.appspot.com",
  messagingSenderId: "868244718493",
  appId: "1:868244718493:web:af506069f1183789b42574",
});

export const auth = app.auth();
export default app;

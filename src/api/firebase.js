import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCgsPwWKQrY1SmFkjrfvUjXfzL3BFnNg9s",
    authDomain: "gb-example-df309.firebaseapp.com",
    databaseURL: "https://gb-example-df309-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-example-df309",
    storageBucket: "gb-example-df309.appspot.com",
    messagingSenderId: "535628412963",
    appId: "1:535628412963:web:5e6543534abdbb7f005996",
    measurementId: "G-XK1MX6N3CB"
  };

  export const firebaseApp= firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.database();
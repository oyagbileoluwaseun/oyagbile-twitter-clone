// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCbeIUdvpzk2i-p0c1QT06Pu-1ZJJzRe9Y",
    authDomain: "oyagbile-twitter-clone.firebaseapp.com",
    databaseURL: "https://oyagbile-twitter-clone.firebaseio.com",
    projectId: "oyagbile-twitter-clone",
    storageBucket: "oyagbile-twitter-clone.appspot.com",
    messagingSenderId: "40494605457",
    appId: "1:40494605457:web:639c758ac1adbcbb994b30",
    measurementId: "G-XF8F9KX0NB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
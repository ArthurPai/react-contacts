import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD9-PrlvKCYwFUWmg5uxLawxw2OeZOOXkE",
  authDomain: "contacts-785f0.firebaseapp.com",
  databaseURL: "https://contacts-785f0.firebaseio.com",
  projectId: "contacts-785f0",
  storageBucket: "contacts-785f0.appspot.com",
  messagingSenderId: "501701225421"
};

firebase.initializeApp(config);

console.log(firebase.name);

export default firebase;

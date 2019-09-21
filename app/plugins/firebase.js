import firebase from 'firebase'
if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyBhBZUhmloHE07dAgNBbBk0Roa1jnVu0DY",
    authDomain: "warehouse-de82b.firebaseapp.com",
    databaseURL: "https://warehouse-de82b.firebaseio.com",
    projectId: "warehouse-de82b",
    storageBucket: "warehouse-de82b.appspot.com",
    messagingSenderId: "699982825599",
    appId: "1:699982825599:web:c1f671693a5f4863b7d74a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
export default firebase
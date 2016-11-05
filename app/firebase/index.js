import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey:            "AIzaSyCgEUPPGC87TDKnYdv7bi9cE9HuYy3nwMk",
    authDomain:        "react-todo-app-af84b.firebaseapp.com",
    databaseURL:       "https://react-todo-app-af84b.firebaseio.com",
    storageBucket:     "react-todo-app-af84b.appspot.com",
    messagingSenderId: "882230265934"
  };
  firebase.initializeApp(config);

} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
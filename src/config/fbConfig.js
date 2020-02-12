  import firebase from 'firebase';  
  import 'firebase/firestore';
  import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPdCKlIwYO8FZzOaZeEi7PyDLL3l6ThFY",
    authDomain: "net-ninja-marioplan-5409c.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-5409c.firebaseio.com",
    projectId: "net-ninja-marioplan-5409c",
    storageBucket: "net-ninja-marioplan-5409c.appspot.com",
    messagingSenderId: "454687377839",
    appId: "1:454687377839:web:0ce6cfde6e30d0c00bc75a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase; 
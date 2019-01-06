import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDpCLxre50JPFp77YLk6sj5aqGOLZr1ptk",
    authDomain: "sunny-side-landing-page.firebaseapp.com",
    databaseURL: "https://sunny-side-landing-page.firebaseio.com",
    projectId: "sunny-side-landing-page",
    storageBucket: "",
    messagingSenderId: "813126007472"
  };

  firebase.initializeApp(config);

  export default firebase;

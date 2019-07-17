import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCgrsK0V-ckv9nyl0g27-AQTqmQZMAsi5Y",
    authDomain: "rocket-launches.firebaseapp.com",
    databaseURL: "https://rocket-launches.firebaseio.com",
    projectId: "rocket-launches",
    storageBucket: "rocket-launches.appspot.com",
    messagingSenderId: "65918961045",
    appId: "1:65918961045:web:fa38228c1bffafd8"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
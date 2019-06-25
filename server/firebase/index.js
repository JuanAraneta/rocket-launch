// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCgrsK0V-ckv9nyl0g27-AQTqmQZMAsi5Y",
//     authDomain: "rocket-launches.firebaseapp.com",
//     databaseURL: "https://rocket-launches.firebaseio.com",
//     projectId: "rocket-launches",
//     storageBucket: "rocket-launches.appspot.com",
//     messagingSenderId: "65918961045",
//     appId: "1:65918961045:web:fa38228c1bffafd8"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>

let admin = require("firebase-admin"),
    serviceAccount = require("./credentials.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rocket-launches.firebaseio.com"
})

const db = admin.firestore()

module.exports = db
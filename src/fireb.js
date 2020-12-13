import firebase from "firebase"
import 'firebase/firestore'
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAL-8XCswf0ckHBHCAr8McNyBNtgZE-50g",
        authDomain: "to-do-app-e9f5f.firebaseapp.com",
        projectId: "to-do-app-e9f5f",
        storageBucket: "to-do-app-e9f5f.appspot.com",
        messagingSenderId: "74037804494",
        appId: "1:74037804494:web:9c649a9101e97960683f9f",
        measurementId: "G-LKZC42QVE7"
    });
}

let db = firebase.firestore();

export { firebase, db }
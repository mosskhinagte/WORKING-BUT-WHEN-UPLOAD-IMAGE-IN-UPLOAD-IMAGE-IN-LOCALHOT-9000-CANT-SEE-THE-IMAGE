import firebase from 'firebase'

const firebaseConfig = {
    // this is where your firebase config goes
    apiKey: "AIzaSyDklaMn34nwLNdR-xBoZGsK4NSDqeQFNtI",
    authDomain: "fb-mern-c7c81.firebaseapp.com",
    projectId: "fb-mern-c7c81",
    storageBucket: "fb-mern-c7c81.appspot.com",
    messagingSenderId: "538679280236",
    appId: "1:538679280236:web:08cf18e105f74079488e49",
    measurementId: "G-4QD2L8KP2X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db
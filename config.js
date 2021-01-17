import firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE0oIQrSWx3sJ1uuzwmQjhiqHR0LSZJKo",
  authDomain: "bartersystemapp-25217.firebaseapp.com",
  projectId: "bartersystemapp-25217",
  storageBucket: "bartersystemapp-25217.appspot.com",
  messagingSenderId: "773433321952",
  appId: "1:773433321952:web:30792b43ebcf580b9a2385",
  measurementId: "G-CTY8YXCZJ7"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
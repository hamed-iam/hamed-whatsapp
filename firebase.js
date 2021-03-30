import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCQ49bEzicw1K_Dupq8g9Oj0MtnZ5W71QA',
  authDomain: 'hamed-whatsapp.firebaseapp.com',
  projectId: 'hamed-whatsapp',
  storageBucket: 'hamed-whatsapp.appspot.com',
  messagingSenderId: '169039283618',
  appId: '1:169039283618:web:0740d58847bd66517edefb',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: "YOURKEYHERE",
  authDomain: "application.firebaseapp.com",
  databaseURL: "https://application.firebaseio.com",
  storageBucket: "application.appspot.com",
  messagingSenderId: "YOURMESSAGEID"
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule
  .initializeApp(firebaseConfig, firebaseAuthConfig);
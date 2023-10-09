import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBd2k2D_E_zs069KphXE_j_Dc4A_fnxjkY",
    authDomain: "whatsapp-clone-88545.firebaseapp.com",
    projectId: "whatsapp-clone-88545",
    storageBucket: "whatsapp-clone-88545.appspot.com",
    messagingSenderId: "218113339346",
    appId: "1:218113339346:web:68717b8c30b1dae2e4220b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider}
  export default db;
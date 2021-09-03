import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={

  apiKey: "AIzaSyC1OpHMRtlUMHKm0R30ZftrdoND_d4U4bw",

  authDomain: "line-db-c1ea6.firebaseapp.com",

  projectId: "line-db-c1ea6",

  storageBucket: "line-db-c1ea6.appspot.com",

  messagingSenderId: "510836283676",

  appId: "1:510836283676:web:db8f5f3fd1e075cce442d9",

  measurementId: "G-XT5ZP8BEFF"

};
 export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () =>{ auth.signInWithPopup(provider);}

export default firebase;

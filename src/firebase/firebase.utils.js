import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyDA2Blm0leADzzNTZ2BwjQsC_eJBo0LpPA",
    authDomain: "crwn-db-72bc9.firebaseapp.com",
    databaseURL: "https://crwn-db-72bc9.firebaseio.com",
    projectId: "crwn-db-72bc9",
    storageBucket: "crwn-db-72bc9.appspot.com",
    messagingSenderId: "795721411502",
    appId: "1:795721411502:web:b3415970e01472bcd9763f",
    measurementId: "G-6L79P82DQ2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
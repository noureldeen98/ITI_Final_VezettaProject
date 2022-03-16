import { db } from '../../FireBaseConfiguration/FirebaseConfiguration';
import { getDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

class UserDataServices {
	updateUser = (id, user) => {
		const userDoc = doc(db, "PharmacyUsers", id);
		return updateDoc(userDoc, user);
	}

	deleteUser = (id) => {
		const userDoc = doc(db, "PharmacyUsers", id);
		return deleteDoc(userDoc);
	}

	getUser = (id) => {
		const userDoc = doc(db, "PharmacyUsers", id);
		return getDoc(userDoc);
	}
}

export default new UserDataServices(); 
import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
import {addDoc, collection} from 'firebase/firestore'
const addAppointement = (data) => {
    return (dispatch) => {
        addDoc(collection(db, 'Appointment'), data)
        .then(data => {
            console.log('from visit home action', data);
            dispatch({type: 'bookAppointement', payload: data})
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export {addAppointement}
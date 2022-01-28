import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
const getDepts = () => {
    return (dispatch) => {
        db.collection('Departments').get()
        .then(data => {
            data.forEach(depts => {
                dispatch({type: 'get-departments', payload: depts.data()})
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default getDepts;
import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
const getDepts = () => {
    return (dispatch) => {
        db.collection('Departments').get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push(depts.data());
                dispatch({type: 'get-departments', payload: allData})
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default getDepts;
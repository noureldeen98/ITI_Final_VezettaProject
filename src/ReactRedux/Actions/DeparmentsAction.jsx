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

// const getCommonDept = () => {
//     return (dispatch) => {
//         db.collection('Departments').where('common', '==', true).get()
//         .then(data => {
//             let allData = []
//             data.forEach(depts => {
//                 allData.push(depts.data().name);
//                 dispatch({type: 'get-common-dept', payload: allData})
//             })
//             console.log('from action', allData);
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }
// }

// const getOtherDept = () => {
//     return (dispatch) => {
//         db.collection('Departments').where('common', '==', false).get()
//         .then(data => {
//             let allData = []
//             data.forEach(depts => {
//                 allData.push(depts.data().name);
//                 dispatch({type: 'get-common-dept', payload: allData})
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }
// }

export { getDepts};
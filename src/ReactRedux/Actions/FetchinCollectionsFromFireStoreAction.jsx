// import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
// const getCollectionOfDoctors = (urlOfDoctorCollection) => {
//     return (dispatch) => {
//         db.collection(urlOfDoctorCollection).get()
//         .then(data => {
//             let allData = []
//             data.forEach(depts => {
//                 allData.push(depts.data());
//                 dispatch({type: 'Fetch', payload: allData})
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         })
//     }
// }


import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
const FetchinCollectionsFromFireStoreAction = () => {
    return (dispatch) => {
        db.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist").get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push(depts.data());
                
            })
            dispatch({type: 'Fetch', payload: allData})
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default FetchinCollectionsFromFireStoreAction;

// export default getCollectionOfDoctors;


// myCollection: "/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist/"


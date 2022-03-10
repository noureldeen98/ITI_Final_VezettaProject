import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
import {query, collection, orderBy, limit, getDocs, startAfter, where} from 'firebase/firestore';
import { changeLoader } from './loaderAction'
export const getAllDoctorAction=()=>{

    return (dispatch)=>{
        db.collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').get()
        .then(data=>{
            let allDocs=[]
            data.forEach(doctor=>{
                allDocs.push(doctor.data());
            })
            dispatch({type: 'getDoctor', payload: allDocs});
            dispatch(changeLoader(false));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const getSpecificDoc=(name)=>{

    // return (dispatch)=>{
    //     db.collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').get()
    //     .then((querySnapshot)=>{
    //         querySnapshot.forEach((doc) => {
    //             console.log(`${doc.id} => ${doc.data()}`)
    //         })
    //         dispatch({type: 'getSpecificDoctor', payload: querySnapshot});
    //     })
    // }
    return async (dispatch)=>{
        const doct=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
        where('Name','==',name));

        // console.log(doct)
       const details =await getDocs(doct)

       details.forEach((doc)=>{
        console.log(doc.id, " => ", doc.data());
        // console.log(doc.data())
        dispatch({type: 'getSpecificDoctor', payload: doc.data()});
        dispatch(changeLoader(false));
       })
      
    //   console.log(details._snapshot.docChanges[0].doc.data.value.mapValue.fields)
    //   console.log(details.query)
    //    dispatch({type: 'getSpecificDoctor', payload: details});
    // await getDocs(doct)       
    //     .then(data => {
    //         let Doctor = []
    //         data.forEach(doc => {
    //             Doctor.push(doc.data());
    //         })
            
    //         dispatch({type: 'getSpecificDoctor', payload: Doctor[0]});
    //         console.log(Doctor[0])

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
    // return (dispatch)=>{
    //     db.collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').doc(name).get()
    //     .then(data => {
                   
                    
    //                 dispatch({type: 'getSpecificDoctor', payload: data});
        
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             })
     }
}

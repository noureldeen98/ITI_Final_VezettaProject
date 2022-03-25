import { db } from '../../FireBaseConfiguration/FirebaseConfiguration.js';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { changeLoader } from './loaderAction'

export const getAllDoctorAction = () => {

    return (dispatch) => {
        db.collection('/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors').get()
            .then(data => {
                let allDocs = []
                data.forEach(doctor => {
                    allDocs.push(doctor.data());
                })
                dispatch({ type: 'getDoctor', payload: allDocs });
                dispatch(changeLoader(false));
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const filterDoctor = (dpt, city, area, doc) => {

    return async (dispatch) => {
 
       if(dpt!=''&& city==''&& area==''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
            where('dpt','==',dpt));
            const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
    
        }
        else if(dpt==''&& city!=''&& area==''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
             where('city','==',city));
             const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        }
        else if(dpt==''&& city==''&& area!=''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
            where('area','==',area));
            const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        }
        else if(dpt==''&& city==''&& area==''&& doc!='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
            where('nameInArabic','==',doc));
            // console.log(docts)
            const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        }
        else if(dpt!=''&&city!=''&&area!=''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
             where('dpt','==',dpt),where('city','==',city),where('area','==',area));
            //  console.log(docts)
             const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        } else if(dpt!=''&&city!=''&&area==''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
             where('dpt','==',dpt),where('city','==',city));
            //  console.log(docts)
             const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        } else if(dpt==''&&city!=''&&area!=''&& doc=='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
             where('city','==',city),where('area','==',area));
            //  console.log(docts)
             const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        } else if(dpt!=''&&city!=''&&area!=''&& doc!='')
        {
          
            const docts=query(collection(db,'/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
             where('dpt','==',dpt),where('city','==',city),where('area','==',area)
             ,where('nameInArabic','==',doc));
            //  console.log(docts)
             const details = await getDocs(docts)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                // console.log("From Filter")
                dispatch({ type: 'FilterDoctors', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        }
        
    }
}
export const clearDoctor = ()=>{
    return {
        type:'CLEAR_Doctor'
    }
}
export const getSpecificDoc = (name, covid) => {

    if (covid === false) {
        return async (dispatch) => {
            const doct = query(collection(db, '/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/GeneralDoctors'),
                where('Name', '==', name));

            const details = await getDocs(doct)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                dispatch({ type: 'getSpecificDoctor', payload: doc.data() });
                dispatch(changeLoader(false));
            })

        }
    }

    else {

        return async (dispatch) => {
            const doct = query(collection(db, '/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist'),
                where('Name', '==', name));

            // console.log(doct)
            const details = await getDocs(doct)

            details.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                // console.log(doc.data())
                dispatch({ type: 'getSpecificDoctor', payload: doc.data() });
                dispatch(changeLoader(false));
            })
        }
    }
}

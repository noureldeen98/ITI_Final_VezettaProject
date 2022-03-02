import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
import {query, collection, orderBy, limit, getDocs, startAfter, where} from 'firebase/firestore';
const getDepts = () => {
    return (dispatch) => {
        db.collection('Deparments').get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push(depts.data());
            })
            dispatch({type: 'getDepts', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const getCommonDept = (count) => {
    return async (dispatch) => {
        // Query the first page of docs
        const first = query(collection(db, 'Deparments'),
        where('common', '!=', false), 
        limit(2));
        const firstHandler = await getDocs(first);
        // Get the last visible document
        const lastVisible = firstHandler.docs[firstHandler.docs.length-1];
        // Construct a new query starting at this document,
        // get the next 25 cities.
        const next = query(collection(db, "Deparments"),
        where('common', '==', true),
        startAfter(lastVisible),
        limit(count));
        getDocs(next)
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push(depts.data());
            })
            dispatch({type: 'getCommonDpts', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const getOtherDept = (count) => {
    return async (dispatch) => {
        // Query the first page of docs
        const first = query(collection(db, 'Deparments'), 
        where('common', '!=', true), 
        limit(count));
        const firstHandler = await getDocs(first);
        // Get the last visible document
        const lastVisible = firstHandler.docs[firstHandler.docs.length-1];
        // Construct a new query starting at this document,
        // get the next 25 cities.
        const next = query(collection(db, "Deparments"),
        where('common', '!=', true),
        startAfter(lastVisible),
        limit(2));
        getDocs(next)
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push(depts.data());
            })
            dispatch({type: 'getOtherDpts', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
    // return (dispatch) => {
    //     db.collection('Deparments').where('common', '!=', true).get()
    //     .then(data => {
    //         let allData = []
    //         data.forEach(depts => {
    //             allData.push(depts.data());
    //         });
    //         dispatch({type: 'getOtherDpts', payload: allData})
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
}

export { getDepts, getCommonDept, getOtherDept};
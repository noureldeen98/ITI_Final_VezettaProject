import {db} from '../../FireBaseConfiguration/FirebaseConfiguration.js';
const getCities = () => {
    return (dispatch) => {
        db.collection('cities').get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push({...depts.data(), id: depts.id});
            })
            dispatch({type: 'getCities', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const getCommonCity = () => {
    return (dispatch) => {
        db.collection('cities').where('common', '==', true).get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push({...depts.data(), id: depts.id});
            })
            dispatch({type: 'getCommonCities', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
}

const getOtherCities = () => {
    return (dispatch) => {
        db.collection('cities').where('common', '==', false).get()
        .then(data => {
            let allData = []
            data.forEach(depts => {
                allData.push({...depts.data(), id: depts.id});
            })
            dispatch({type: 'getOtherCities', payload: allData});
        })
        .catch(err => {
            console.log(err);
        })
    }
    
}

const getAreas= (id) => {
    return (dispatch) => {
        db.collection('cities').doc(id).get()
        .then(data => {
            dispatch({type: 'getAreas', payload: data.data()});
        })
        .catch(err => {
            console.log(err);
        })
    }
    
}

export {getCities, getCommonCity, getOtherCities, getAreas};
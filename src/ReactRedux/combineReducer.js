import { combineReducers } from "redux";
import { allCitiesReducer } from "./Reducers/CitiesReducerRedux";
import {allDeptsReducer} from "./Reducers/DeptsReducerRedux.jsx";
import {getAllDoctor} from './Reducers/DoctorCallReducer'

import doctorCollectionReducer from './Reducers/ReducerOfFetchingCollections'
import {bookAppointmentReducer } from './Reducers/HomeVisitReducer.jsx'

const combineReducer = combineReducers({
    deptReducer: allDeptsReducer,
    citiesReducer: allCitiesReducer,
    getDoctors :getAllDoctor,
    doctorCollectionReducer: doctorCollectionReducer,
    bookVisitReducer: bookAppointmentReducer
// import doctorCollectionReducer from '../ReactRedux/Reducers/ReducerOfFetchingCollectionsofDoctors'
// const combineReducer = combineReducers({
//     deptRed: deptReducer,
//     doctorCollectionReducer :doctorCollectionReducer,

 })

 export default combineReducer;

//     areasReduxReducer: allAreasReducer
// })


// const combineReducer = combineReducers({
//     deptRed: deptReducer,
//     dptReduxReducer: allDeptsReducer,
//     citiesReduxReducer: allCitiesReducer,
//     areasReduxReducer: allAreasReducer
// })


// import doctorCollectionReducer from '../ReactRedux/Reducers/ReducerOfFetchingCollectionsofDoctors'
// const combineReducer = combineReducers({
//     deptRed: deptReducer,
//     doctorCollectionReducer :doctorCollectionReducer,


// })


// const combineReducer = combineReducers({
//   deptRed: deptReducer,
//   dptReduxReducer: allDeptsReducer,
//   citiesReduxReducer: allCitiesReducer,
//   areasReduxReducer: allAreasReducer,
// });



//export default combineReducer;






import { combineReducers } from "redux";
import { allAreasReducer } from "./Reducers/AreasReducerRedux";
import { allCitiesReducer } from "./Reducers/CitiesReducerRedux";
import deptReducer from "./Reducers/DepartmentsReducer";
import { allDeptsReducer } from "./Reducers/DeptsReducerRedux";
import {getAllDoctor} from './Reducers/DoctorCallReducer'

import doctorCollectionReducer from './Reducers/ReducerOfFetchingCollections'



const combineReducer = combineReducers({
    deptRed: deptReducer,
    dptReduxReducer: allDeptsReducer,
    citiesReduxReducer: allCitiesReducer,
    areasReduxReducer: allAreasReducer,
    getDoctors :getAllDoctor,
    doctorCollectionReducer: doctorCollectionReducer,
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






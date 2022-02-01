import { combineReducers } from "redux";
import { allAreasReducer } from "./Reducers/AreasReducerRedux";
import { allCitiesReducer } from "./Reducers/CitiesReducerRedux";
import deptReducer from './Reducers/DepartmentsReducer'

import { allDeptsReducer } from "./Reducers/DeptsReducerRedux";
import {getAllDoctor} from './Reducers/DoctorCallReducer'

const combineReducer = combineReducers({
    deptRed: deptReducer,
    dptReduxReducer: allDeptsReducer,
    citiesReduxReducer: allCitiesReducer,
    areasReduxReducer: allAreasReducer,
    getDoctors :getAllDoctor

// import doctorCollectionReducer from '../ReactRedux/Reducers/ReducerOfFetchingCollectionsofDoctors'
// const combineReducer = combineReducers({
//     deptRed: deptReducer,
//     doctorCollectionReducer :doctorCollectionReducer,

 })

 export default combineReducer;
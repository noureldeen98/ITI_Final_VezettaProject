import { combineReducers } from "redux";
import deptReducer from './Reducers/DepartmentsReducer'
import doctorCollectionReducer from '../ReactRedux/Reducers/ReducerOfFetchingCollectionsofDoctors'
const combineReducer = combineReducers({
    deptRed: deptReducer,
    doctorCollectionReducer :doctorCollectionReducer,
})

export default combineReducer;
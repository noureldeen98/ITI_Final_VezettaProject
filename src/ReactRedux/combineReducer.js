import { combineReducers } from "redux";
import deptReducer from './Reducers/DepartmentsReducer'
const combineReducer = combineReducers({
    deptRed: deptReducer,
})

export default combineReducer;
import { combineReducers } from "redux";
import deptReducer from './Reducers/DepartmentsReducer'
import { allDeptsReducer } from "./Reducers/DeptsReducerRedux";
const combineReducer = combineReducers({
    deptRed: deptReducer,
    dptReduxReducer: allDeptsReducer
})

export default combineReducer;
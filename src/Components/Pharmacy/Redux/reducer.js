import { combineReducers } from "redux";
import medicineReducer from './medicine/medicineReducer';
const reducer = combineReducers({
    medicine: medicineReducer
});
export default reducer;
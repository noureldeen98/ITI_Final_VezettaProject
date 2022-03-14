import { combineReducers } from "redux";
import medicineReducer from './medicine/medicineReducer';
import userReducer from './user/userReducer';

const reducer = combineReducers({
    medicine: medicineReducer,
    user: userReducer
});

export default reducer;
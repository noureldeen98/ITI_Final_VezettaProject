import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
const storePharmacy = createStore(reducer, composeWithDevTools());
export default storePharmacy;
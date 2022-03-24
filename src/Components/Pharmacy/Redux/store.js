import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

const storePharmacy = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
export default storePharmacy;
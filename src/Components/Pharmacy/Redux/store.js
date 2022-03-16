import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger)
}

const composedEnhancer = compose(applyMiddleware(...middleware), composeWithDevTools())
const storePharmacy = createStore(reducer, composedEnhancer);
export default storePharmacy;
import * as actionTypes from './medicineTypes';

const INITIAL_STATE = {
    medicines: [],
    cartItems: [],
    currentItems: null,
}

const medicineReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
            }
        case actionTypes.ADJUST_QTY:
            return {
            }
        case actionTypes.LOAD_CURRENT_ITEMS:
            return {
            }
        default:
            return state;
    }
}

export default medicineReducer;
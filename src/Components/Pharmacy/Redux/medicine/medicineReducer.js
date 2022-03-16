import * as actionTypes from "./medicineTypes";
import { db } from "../../../../FireBaseConfiguration/FirebaseConfiguration";

const medicines = [];

db.collection("Pharmacy")
    .get()
    .then((data) => {
        data.forEach((element) => {
            medicines.push(element.data());
        });
    });

const INITIAL_STATE = {
    data: medicines,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    currentItem: null,
};

const medicineReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.data.find((item) => item.id === action.payload.id);
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEMS:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default medicineReducer;

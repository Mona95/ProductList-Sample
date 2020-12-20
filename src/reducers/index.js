import * as actionType from "../actions/actionTypes.js";
import { productsData } from "../data/products";

const initialState = {
  products: productsData(),
  selectedProduct: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CURRENT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

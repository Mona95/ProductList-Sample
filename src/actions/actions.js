import * as actionType from "./actionTypes";

export const setCurrentProduct = (productInfo) => ({
  type: actionType.SET_CURRENT_PRODUCT,
  payload: productInfo,
});

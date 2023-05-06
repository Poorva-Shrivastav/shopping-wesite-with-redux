import { ActionTypes } from "../constants/actionTypes";

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const clearSelectedProduct = () => {
  return {
    type: ActionTypes.CLEAR_SELECTED_PRODUCT,
  };
};

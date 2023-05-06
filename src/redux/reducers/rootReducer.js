import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  allProduct: productReducer,
  product: selectedProductReducer,
});

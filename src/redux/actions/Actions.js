import { actionType } from "../constants/actionTypes";

export const increase = () => {
  return {
    type: actionType.INCREMENT,
  };
};
export const decrease = () => {
  return {
    type: actionType.DECREMENT,
  };
};

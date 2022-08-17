import { DDECREMENT, DINCREMENT } from "./actionTypes";

export const dIncrement = (value) => {
  return {
    type: DINCREMENT,
    payload: value,
  };
};

export const dDecrement = (value) => {
  return {
    type: DDECREMENT,
    payload: value,
  };
};

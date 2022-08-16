import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/action";
import Button from "./Button";
import Count from "./Count";

const HooksCounter = ({ id }) => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };

  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button
          css={"bg-indigo-400 text-white px-3 py-2 rounded shadow"}
          handler={() => incrementHandler(5)}
        >
          Increment
        </Button>
        <Button
          css={"bg-red-400 text-white px-3 py-2 rounded shadow"}
          handler={() => decrementHandler(2)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default HooksCounter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/action";
import Button from "./Button";
import Count from "./Count";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button
          css={"bg-indigo-400 text-white px-3 py-2 rounded shadow"}
          handler={incrementHandler}
        >
          Increment
        </Button>
        <Button
          css={"bg-red-400 text-white px-3 py-2 rounded shadow"}
          handler={decrementHandler}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default HooksCounter;

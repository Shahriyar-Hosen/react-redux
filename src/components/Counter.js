import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ id, count, increment, decrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button
          css={"bg-indigo-400 text-white px-3 py-2 rounded shadow"}
          handler={() => increment(id)}
        >
          Increment
        </Button>
        <Button
          css={"bg-red-400 text-white px-3 py-2 rounded shadow"}
          handler={() => decrement(id)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;

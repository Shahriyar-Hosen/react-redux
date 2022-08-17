import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/action";
import { dDecrement, dIncrement } from "../redux/dynamicCounter/action";
import Button from "./Button";
import Count from "./Count";

const VariableCounter = ({ count, increment, decrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button
          css={"bg-indigo-400 text-white px-3 py-2 rounded shadow"}
          handler={() => increment(5)}
        >
          Increment
        </Button>
        <Button
          css={"bg-red-400 text-white px-3 py-2 rounded shadow"}
          handler={() => decrement(2)}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

// mapStateToProps() and mapDispatchToProps()
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.dynamic);
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? (value) => dispatch(dIncrement(value))
      : () => dispatch(increment()),
    decrement: ownProps.dynamic
      ? (value) => dispatch(dDecrement(value))
      : () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);

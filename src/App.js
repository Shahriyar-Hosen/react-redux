import React from "react";
// import Counter from "./components/Counter";
import DynamicCounter from "./components/DynamicCounter";
import HooksCounter from "./components/HooksCounter";
// import Stats from "./components/Stats";

// const initialState = [
//   {
//     id: 1,
//     count: 0,
//   },
//   {
//     id: 2,
//     count: 0,
//   },
// ];

const App = () => {
  // const totalCount = () => {
  //   return state.reduce((total, counter) => total + counter.count, 0);
  // };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="max-w-md mx-auto mt-10 space-y-5">
        {/* <Counter id="1" /> */}
        <HooksCounter />
        <DynamicCounter />
        <div>
          {/* {state.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.count}
            increment={increment}
            decrement={decrement}
          />
        ))} */}
          {/* <Stats count={totalCount()} /> */}
        </div>
      </div>
    </div>
  );
};

export default App;

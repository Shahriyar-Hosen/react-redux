import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// Create our first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`action: ${JSON.stringify(action)}`);
  console.log(`before: ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());

  console.log(`upcoming State: ${JSON.stringify(upcomingState)}`);
  //pass action
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));

export default store;

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

export default function configureStoreDev(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
    //this is middleware to warn if state is mutated.
  );
}

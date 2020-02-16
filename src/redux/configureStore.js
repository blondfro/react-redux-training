import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImutableStateImvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  // add support for redux devtools:
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImutableStateImvariant()))
    //this is middleware to warn if state is mutated.
  );
}

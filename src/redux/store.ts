import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers";
import reduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(reduxThunk, promise))
);

export default store;

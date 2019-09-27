import allReducers from "./reducers";
import { createStore } from "redux";
import messages from "./messages";

const initialState = {
  intl: {
    defaultLocale: "es",
    locale: "es",
    messages: messages.es
  }
  // ...other initialState
};

const store = createStore(
  allReducers,
  initialState,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
);

export default store;

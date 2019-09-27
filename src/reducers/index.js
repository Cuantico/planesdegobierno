import { combineReducers } from "redux";
import { intlReducer } from "react-intl-redux";
import localesReducer from "./localesReducer";
import classReducer from "./classReducer";
import projectReducer from "./projectReducer";

const allReducers = combineReducers({
  intl: intlReducer,
  locales: localesReducer,
  class: classReducer,
  project: projectReducer
});

export default allReducers;

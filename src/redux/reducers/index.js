import { combineReducers } from "redux";

import meReducer from "./me";
import todoReducer from "./todos";

export default combineReducers({
  me: meReducer,
  todos: todoReducer,
});

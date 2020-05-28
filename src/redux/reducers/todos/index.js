import _ from "lodash";
import { CREATE_TODO, FETCH_TODOS } from "../../actions/todos/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state };
    case FETCH_TODOS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
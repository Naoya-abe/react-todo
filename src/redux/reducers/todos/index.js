import _ from "lodash";
import {
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
} from "../../actions/todos/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return state;
    case FETCH_TODOS:
      return {
        count: action.payload.count,
        ..._.mapKeys(action.payload.results, "id"),
      };
    case FETCH_TODO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

import _ from "lodash";
import { CREATE_TODO, FETCH_TODOS } from "../../actions/todos/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TODOS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

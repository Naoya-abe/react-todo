import { CREATE_ME, FETCH_ME } from "../../actions/me/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ME:
      return { ...action.payload };
    case FETCH_ME:
      return { ...action.payload };
    default:
      return state;
  }
};

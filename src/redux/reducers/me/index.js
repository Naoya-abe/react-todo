import _ from "lodash";
import { CREATE_ME } from "../../actions/me/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ME:
      return { ...action.payload };
    default:
      return state;
  }
};

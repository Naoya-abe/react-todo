import { createMeAPI } from "../../../api/me";

import { CREATE_ME } from "./types";

export const createMe = (data) => async (dispatch) => {
  try {
    const response = await createMeAPI(data);
    dispatch({ type: CREATE_ME, payload: response.data });
  } catch (err) {
    throw err;
  }
};

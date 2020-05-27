import { createMeAPI, fetchMeAPI } from "../../../api/me";

import { CREATE_ME, FETCH_ME } from "./types";

export const createMe = (data) => async (dispatch) => {
  try {
    const response = await createMeAPI(data);
    dispatch({ type: CREATE_ME, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchMe = () => async (dispatch) => {
  try {
    const response = await fetchMeAPI();
    dispatch({ type: FETCH_ME, payload: response.data });
  } catch (err) {}
};

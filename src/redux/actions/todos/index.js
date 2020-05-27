import { createTodoAPI } from "../../../api/todos";
import { CREATE_TODO } from "./types";

export const createTodo = (data) => async (dispatch) => {
  try {
    const response = await createTodoAPI(data);
    dispatch({ type: CREATE_TODO, payload: response.data });
  } catch (err) {
    throw err;
  }
};

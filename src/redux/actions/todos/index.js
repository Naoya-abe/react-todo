import { createTodoAPI, fetchTodosAPI } from "../../../api/todos";
import { CREATE_TODO, FETCH_TODOS } from "./types";

export const createTodo = (data) => async (dispatch) => {
  try {
    const response = await createTodoAPI(data);
    dispatch({ type: CREATE_TODO, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchTodos = (activePage) => async (dispatch) => {
  try {
    const response = await fetchTodosAPI(activePage);
    dispatch({ type: FETCH_TODOS, payload: response.data });
  } catch (err) {
    throw err;
  }
};

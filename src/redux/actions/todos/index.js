import { createTodoAPI, fetchTodosAPI, fetchTodoAPI } from "../../../api/todos";
import { CREATE_TODO, FETCH_TODOS, FETCH_TODO } from "./types";

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

export const fetchTodo = (todoId) => async (dispatch) => {
  try {
    const response = await fetchTodoAPI(todoId);
    dispatch({ type: FETCH_TODO, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

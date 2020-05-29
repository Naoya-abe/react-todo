import {
  createTodoAPI,
  fetchTodosAPI,
  fetchTodoAPI,
  patchTodoAPI,
  deleteTodoAPI,
} from "../../../api/todos";

import {
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  EDIT_TODO,
  DELETE_TOTO,
} from "./types";

import history from "../../../history";
import paths from "../../../config/paths";

export const createTodo = (data) => async (dispatch) => {
  try {
    const response = await createTodoAPI(data);
    dispatch({ type: CREATE_TODO, payload: response.data });
    history.push(paths.todos.list);
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
    throw err;
  }
};

export const patchTodo = (todoId, data) => async (dispatch) => {
  try {
    const response = await patchTodoAPI(todoId, data);
    dispatch({ type: EDIT_TODO, payload: response.data });
    history.push(`/todos/${todoId}/detail`);
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    const response = await deleteTodoAPI(todoId);
    dispatch({ type: DELETE_TOTO, payload: response });
    history.push(paths.todos.list);
  } catch (err) {
    throw err;
  }
};

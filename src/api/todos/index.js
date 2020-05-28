import base from "../base";

export const createTodoAPI = async (data) => {
  try {
    const { todoTitle, todoContent } = data;
    const params = {
      title: todoTitle,
      content: todoContent,
      is_finished: false,
    };
    const token = sessionStorage.getItem("token");
    const response = await base.post("todos/", params, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchTodosAPI = async (activePage) => {
  try {
    const response = await base.get("todos/", { params: { page: activePage } });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchTodoAPI = async (todoId) => {
  try {
    const response = await base.get(`todos/${todoId}`);
    return response;
  } catch (err) {
    throw err;
  }
};

// export const putTodoAPI = async (todoId, data) => {
//   try {
//     const token = sessionStorage.get("token");
//     const response = await base.put(`todos/${todoId}`, {
//       headers: { Authorization: `Token ${token}` },
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// };

export const patchTodoAPI = async (todoId, data) => {
  try {
    const { todoTitle, todoContent } = data;
    const params = { title: todoTitle, content: todoContent };
    const token = sessionStorage.getItem("token");
    const response = await base.patch(`todos/${todoId}/`, params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteTodoAPI = async (todoId) => {
  try {
    const token = sessionStorage.getItem("token");
    await base.delete(`todos/${todoId}/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return todoId;
  } catch (err) {
    throw err;
  }
};

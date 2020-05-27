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
    const response = await base.post("/todos/", params, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

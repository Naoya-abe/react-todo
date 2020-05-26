import React from "react";

import "../../styles/pages/todos/index.scss";
import TodoForm from "./TodoForm";

const TodoEdit = () => {
  const editTodo = () => {
    console.log("success editting");
  };

  return (
    <div className="todo-edit">
      <div className="title">Edit</div>
      <div className="edit-form">
        <TodoForm buttonText="Update" onSubmit={editTodo} />
      </div>
    </div>
  );
};

export default TodoEdit;

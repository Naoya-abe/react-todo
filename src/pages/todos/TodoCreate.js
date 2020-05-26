import React from "react";

import "../../styles/pages/todos/index.scss";

import TodoForm from "./TodoForm";

const TodoCreate = () => {
  const createTodo = () => {
    console.log("success creating");
  };

  return (
    <div className="todo-create">
      <div className="title">Create</div>
      <div className="create-form">
        <TodoForm buttonText="Submit" onSubmit={createTodo} />
      </div>
    </div>
  );
};

export default TodoCreate;

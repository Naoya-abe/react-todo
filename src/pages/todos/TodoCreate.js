import React, { useState } from "react";
import { connect } from "react-redux";

import { createTodo } from "../../redux/actions/todos";
import TodoForm from "./TodoForm";
import "../../styles/pages/todos/index.scss";

const TodoCreate = (props) => {
  const { createTodo } = props;
  const [loading, setLoading] = useState("");
  const [disabled, setDisabled] = useState("");
  const handleCreate = (data) => {
    setDisabled("disabled");
    setLoading("loading");
    try {
      createTodo(data);
    } catch (err) {
      console.log(err);
    }
    setDisabled("");
    setLoading("");
  };

  return (
    <div className="todo-create">
      <div className="title">Create</div>
      <div className="create-form">
        <TodoForm
          buttonText="Submit"
          onSubmit={handleCreate}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default connect(null, { createTodo })(TodoCreate);

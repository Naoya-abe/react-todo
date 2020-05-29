import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchTodo, patchTodo } from "../../redux/actions/todos";
import TodoForm from "./TodoForm";
import "../../styles/pages/todos/index.scss";

const TodoEdit = (props) => {
  const { todo, match, fetchTodo, patchTodo } = props;

  useEffect(() => {
    (async () => {
      try {
        await fetchTodo(match.params.id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchTodo, match.params.id]);

  const onEdit = (data) => {
    try {
      patchTodo(match.params.id, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="todo-edit">
      <div className="title">Edit</div>
      <div className="edit-form">
        {todo ? (
          <TodoForm
            buttonText="Update"
            onSubmit={onEdit}
            defaultValue={todo}
            edit
          />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.match.params.id;
  return { todo: state.todos[todoId] };
};

export default connect(mapStateToProps, { fetchTodo, patchTodo })(TodoEdit);

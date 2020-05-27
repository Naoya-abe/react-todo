import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import paths from "../../config/paths";
import { fetchTodos } from "../../redux/actions/todos";
import { Card } from "../../components";
import "../../styles/pages/todos/index.scss";

const TodoList = (props) => {
  const { todos, fetchTodos } = props;

  useEffect(() => {
    (async () => {
      try {
        await fetchTodos();
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchTodos]);

  return (
    <div className="todo-list">
      <div className="title">Todo App.</div>
      <div className="todo-cards">
        {todos.map((todo) => {
          return (
            <Link to={paths.todos.detail} className="to-detail" key={todo.id}>
              <Card
                avatarUrl="https://my-pig-portfolio.s3-ap-northeast-1.amazonaws.com/images/pig.png"
                displayName="Tonpei"
                date="2020/05/05"
                description="Elliot requested permission to view your contact details"
              />
            </Link>
          );
        })}
        {/* Todo: Add pagination */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos),
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);

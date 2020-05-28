import React, { useEffect } from "react";

import { connect } from "react-redux";
import moment from "moment";

import { fetchTodo } from "../../redux/actions/todos";
import { Card } from "../../components";
import "../../styles/pages/todos/index.scss";

const TodoDetail = (props) => {
  const { me, todo, match, fetchTodo } = props;

  useEffect(() => {
    (async () => {
      try {
        await fetchTodo(match.params.id);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchTodo, match.params.id]);

  return (
    <div className="todo-detail">
      <div className="title">Detail</div>
      {todo ? (
        <div className="detail-card">
          <Card
            avatarUrl={todo.user.avatar_url}
            displayName={todo.user.display_name}
            date={moment(todo.created_at).startOf("day").fromNow()}
            title={todo.title}
            description={todo.content}
            detail={me.id === todo.user.id}
            todoId={todo.id}
          />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const todoId = ownProps.match.params.id;
  return { me: state.me, todo: state.todos[todoId] };
};

export default connect(mapStateToProps, { fetchTodo })(TodoDetail);

import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { Icon, Pagination } from "semantic-ui-react";

import paths from "../../config/paths";
import { fetchTodos } from "../../redux/actions/todos";
import { Card } from "../../components";
import "../../styles/pages/todos/index.scss";

const TodoList = (props) => {
  const { todos, totalTodos, fetchTodos } = props;
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        await fetchTodos(activePage);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [activePage, fetchTodos]);

  const onPageChange = async (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
  };

  return (
    <div className="todo-list">
      <div className="title">Todo App.</div>
      <div className="todo-cards">
        {todos.length > 0 ? (
          <React.Fragment>
            {todos.map((todo) => {
              return (
                <Link
                  to={`/todos/${todo.id}/detail`}
                  className="to-detail"
                  key={todo.id}
                >
                  <Card
                    avatarUrl={todo.user.avatar_url}
                    displayName={todo.user.display_name}
                    date={moment(todo.created_at).startOf("day").fromNow()}
                    title={todo.title}
                  />
                </Link>
              );
            })}
            <Pagination
              activePage={activePage}
              totalPages={Math.ceil(totalTodos / 3)}
              onPageChange={onPageChange}
              boundaryRange={1}
              siblingRange={1}
              ellipsisItem={{
                content: <Icon name="ellipsis horizontal" />,
                icon: true,
              }}
              firstItem={{
                content: <Icon name="angle double left" />,
                icon: true,
              }}
              lastItem={{
                content: <Icon name="angle double right" />,
                icon: true,
              }}
              prevItem={{ content: <Icon name="angle left" />, icon: true }}
              nextItem={{ content: <Icon name="angle right" />, icon: true }}
              pointing
              secondary
            />
          </React.Fragment>
        ) : null}
        {}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const todos = Object.values(state.todos);
  const totalTodos = todos.pop();
  return {
    todos,
    totalTodos,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);

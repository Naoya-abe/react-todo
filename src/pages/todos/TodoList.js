import React from "react";
import { Link } from "react-router-dom";

import "../../styles/pages/todos/index.scss";

import paths from "../../config/paths";
import { Card } from "../../components";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="title">Todo App.</div>
      <div className="todo-cards">
        <Link to={paths.todos.detail} className="to-detail">
          <Card
            avatarUrl="https://my-pig-portfolio.s3-ap-northeast-1.amazonaws.com/images/pig.png"
            displayName="Tonpei"
            date="2020/05/05"
            description="Elliot requested permission to view your contact details"
          />
        </Link>
        <Link to={paths.todos.detail} className="to-detail">
          <Card
            avatarUrl="https://my-pig-portfolio.s3-ap-northeast-1.amazonaws.com/images/pig.png"
            displayName="Tonpei"
            date="2020/05/05"
            description="Elliot requested permission to view your contact details"
          />
        </Link>
        <Link to={paths.todos.detail} className="to-detail">
          <Card
            avatarUrl="https://my-pig-portfolio.s3-ap-northeast-1.amazonaws.com/images/pig.png"
            displayName="Tonpei"
            date="2020/05/05"
            description="Elliot requested permission to view your contact details"
          />
        </Link>

        {/* Todo: Add pagination */}
      </div>
    </div>
  );
};

export default TodoList;

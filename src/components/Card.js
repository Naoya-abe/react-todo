import React from "react";
import { Link } from "react-router-dom";

import paths from "../config/paths";
import Button from "./Button";
import "../styles/components/Card.scss";

const Card = (props) => {
  const {
    avatarUrl,
    displayName,
    date,
    title,
    content,
    detail,
    todoId,
  } = props;

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">
            <img className="mini ui image" src={avatarUrl} alt="avatar" />
            {displayName}
          </div>
          <div className="meta">{date}</div>
          <div className="description">
            <p className="todo-title">{title}</p>
            <p className="todo-content">{content}</p>
          </div>
          {detail ? (
            <div className="update-buttons">
              <Link to={`/todos/${todoId}/edit`} className="to-edit">
                <Button buttonText="Edit" />
              </Link>
              <Link to={`/todos/${todoId}/delete`} className="to-delete">
                <Button buttonText="Delete" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;

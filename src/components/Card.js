import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import Checkbox from "./Checkbox";
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
    checked,
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
            <div className="todo-title">
              {title}
              <Checkbox readOnly="read-only" defaultValue={checked} />
            </div>
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

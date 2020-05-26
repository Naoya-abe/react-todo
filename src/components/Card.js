import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Card.scss";

import paths from "../config/paths";
import Button from "./Button";

const Card = (props) => {
  const { avatarUrl, displayName, date, description, detail } = props;
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <div className="header">
            <img className="mini ui image" src={avatarUrl} alt="avatar" />
            {displayName}
          </div>
          <div className="meta">{date}</div>
          <div className="description">{description}</div>
          {detail ? (
            <div className="update-buttons">
              <Link to={paths.todos.edit} className="to-edit">
                <Button buttonText="Edit" />
              </Link>
              <Link to={paths.todos.delete} className="to-delete">
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

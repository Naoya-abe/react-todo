import React, { useState } from "react";

import { connect } from "react-redux";

import { deleteTodo } from "../../redux/actions/todos";
import history from "../../history";
import Modal from "../Modal";

const TodoDelete = (props) => {
  const { match, deleteTodo } = props;
  const [loading, setLoading] = useState(false);

  const handleDelete = (todoId) => {
    try {
      setLoading(true);
      deleteTodo(todoId);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const modalContents = () => {
    return (
      <React.Fragment>
        {loading ? (
          <div className="ui active dimmer">
            <div className="ui loader" />
          </div>
        ) : null}
        <div
          onClick={() => handleDelete(match.params.id)}
          className="run-delete"
        >
          Delete
        </div>
        <div onClick={handleCancel} className="cancel-delete">
          Cancel
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Modal
        title="Are you sure ?"
        querySelector="#delete-modal"
        modalClass="delete-todo"
        contents={modalContents()}
        onDismiss={() => history.goBack()}
      />
    </div>
  );
};

export default connect(null, { deleteTodo })(TodoDelete);

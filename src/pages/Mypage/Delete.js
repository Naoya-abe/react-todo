import React, { useState } from "react";

import history from "../../history";

import Modal from "../Modal";

const Delete = () => {
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    console.log("handleDelete");
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
        <div onClick={handleDelete} className="run-delete">
          Delete my account
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

export default Delete;

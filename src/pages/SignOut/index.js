import React, { useState } from "react";

import Modal from "../Modal";

import history from "../../history";

import "../../styles/pages/SignOut/index.scss";

const SignOut = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    console.log("handleSignOut");
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
        <div onClick={handleSignOut} className="run-signout">
          Sign out
        </div>
        <div onClick={handleCancel} className="cancel-signout">
          Cancel
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <Modal
        title="Are you sure ?"
        querySelector="#signout-modal"
        modalClass="signout"
        contents={modalContents()}
        onDismiss={() => history.goBack()}
      />
    </div>
  );
};

export default SignOut;

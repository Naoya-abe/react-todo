import React, { useState } from "react";
import { Link } from "react-router-dom";

import paths from "../../config/paths";
import "../../styles/pages/SignUp/index.scss";
import thanksImage from "./images/thanks.svg";

import { Button } from "../../components";

const Thanks = () => {
  return (
    <div className="signup-thanks">
      <div className="title">Success</div>
      <div className="thanks-contents">
        <img src={thanksImage} alt="thanksImage" className="thanks-image" />
        <Link to={paths.signin.main}>
          <Button buttonText="Sign in page" />
        </Link>
      </div>
    </div>
  );
};

export default Thanks;

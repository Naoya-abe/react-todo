import React from "react";

import "../styles/components/Button.scss";

const Button = (props) => {
  const { loading, disabled, buttonText } = props;
  return (
    <button className={`ui ${loading} ${disabled} button`} type="submit">
      {buttonText}
    </button>
  );
};

export default Button;

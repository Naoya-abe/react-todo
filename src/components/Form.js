import React from "react";

import "../styles/components/Form.scss";

const Form = (props) => {
  const {
    type,
    name,
    placeholder,
    defaultValue,
    register,
    error,
    label,
  } = props;
  if (error) {
    console.log(error);
  }

  return (
    <div className="field">
      {label ? <label>{label}</label> : null}
      <div className="ui input">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          ref={register}
          autoComplete="off"
        />
      </div>
      {error ? <div className="error-text">{error.message}</div> : null}
    </div>
  );
};

export default Form;

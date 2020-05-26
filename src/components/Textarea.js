import React from "react";

import "../styles/components/Textarea.scss";

const Textarea = (props) => {
  const { name, register, error, defaultValue, placeholder } = props;
  if (error) {
    console.log(error);
  }

  return (
    <div className="field">
      <textarea
        name={name}
        ref={register}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {error ? <div className="error-text">{error.message}</div> : null}
    </div>
  );
};

export default Textarea;

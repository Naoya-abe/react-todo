import React, { useState } from "react";

import "../styles/components/Checkbox.scss";

const Checkbox = (props) => {
  const { labelText, name, defaultValue, register, readOnly } = props;
  const [checked, setChecked] = useState(defaultValue);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={`ui ${readOnly} checkbox`}>
      <input
        type="checkbox"
        ref={register}
        name={name}
        id={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={name}>{labelText}</label>
    </div>
  );
};

export default Checkbox;

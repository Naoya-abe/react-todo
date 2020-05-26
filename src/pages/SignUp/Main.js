import React, { useState } from "react";

import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { createMe } from "../../redux/actions/me";

import history from "../../history";
import paths from "../../config/paths";

import { Button, Form } from "../../components";
import "../../styles/pages/SignUp/index.scss";

const SignUp = (props) => {
  const { createMe } = props;
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState("");
  const [disabled, setDisabled] = useState("");

  const handleSignUp = async (data) => {
    setLoading("loading");
    setDisabled("disabled");
    try {
      await createMe(data);
      // Todo: Can't perform a React state update on an unmounted component
      history.push(paths.signup.thanks);
    } catch (err) {
      console.log(err);
    }
    setLoading("");
    setDisabled("");
  };

  return (
    <div className="signup-main">
      <div className="title">Sign up</div>
      <div className="signup-form">
        <form className="ui form" onSubmit={handleSubmit(handleSignUp)}>
          <Form
            type="text"
            name="displayName"
            register={register({
              required: {
                value: true,
                message: "Please enter your name",
              },
              maxLength: {
                value: 20,
                message: "Please enter within 20 letters",
              },
            })}
            error={errors.displayName}
            label="Name"
          />
          <Form
            type="text"
            name="email"
            register={register({
              required: {
                value: true,
                message: "Please enter your email address",
              },
              pattern: {
                value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                message: "Please enter email address in the correct format",
              },
            })}
            error={errors.email}
            label="Email"
          />
          <Form
            type="password"
            name="password"
            register={register({
              required: { value: true, message: "Please enter your password" },
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
              maxLength: {
                value: 20,
                message: "Please enter within 20 letters",
              },
            })}
            error={errors.password}
            label="Password"
          />
          <Button loading={loading} disabled={disabled} buttonText="Submit" />
        </form>
      </div>
    </div>
  );
};

export default connect(null, { createMe })(SignUp);

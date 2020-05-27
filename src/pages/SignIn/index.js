import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { fetchMeTokenAPI } from "../../api/me";
import { Button, Form } from "../../components";

import "../../styles/pages/SignIn/index.scss";

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState("");
  const [disabled, setDisabled] = useState("");

  const handleSignIn = async (data) => {
    setLoading("loading");
    setDisabled("disabled");
    try {
      const response = await fetchMeTokenAPI(data);
      sessionStorage.setItem("userId", response.id);
      sessionStorage.setItem("token", response.token);
      window.location.href = "/todos";
    } catch (err) {
      console.log(err);
      setLoading("");
      setDisabled("");
    }
  };

  return (
    <div className="signin-main">
      <div className="title">Sign in</div>
      <div className="signin-form">
        <form className="ui form" onSubmit={handleSubmit(handleSignIn)}>
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

export default SignIn;

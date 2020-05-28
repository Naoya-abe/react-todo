import React from "react";
import { useForm } from "react-hook-form";

import { Button, Form, Textarea } from "../../components";

const TodoForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const { buttonText, onSubmit, loading, disabled, defaultValue } = props;

  return (
    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
      <Form
        type="text"
        name="todoTitle"
        placeholder="title"
        defaultValue={defaultValue.title}
        register={register({
          required: {
            value: true,
            message: "Please enter the todo title",
          },
          maxLength: {
            value: 100,
            message: "Please enter within 100 letters",
          },
        })}
        error={errors.todoTitle}
      />
      <Textarea
        name="todoContent"
        placeholder="content"
        defaultValue={defaultValue.content}
        register={register({
          required: {
            value: true,
            message: "Please enter the todo content",
          },
          maxLength: {
            value: 140,
            message: "Please enter within 140 letters",
          },
        })}
        error={errors.todoContent}
      />
      <Button loading={loading} disabled={disabled} buttonText={buttonText} />
    </form>
  );
};

export default TodoForm;

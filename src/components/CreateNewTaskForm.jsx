import React from "react";
import { Button } from "./Button";

export const CreateNewTaskForm = ({
  classes,
  placeholder,
  label,
  nameHandler,
  addTaskHandler,
  taskName,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTaskHandler(taskName);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={taskName}
        onChange={nameHandler}
        className={classes}
        placeholder={placeholder}
        aria-label={label}
      />
      <Button create name="+" label="create new list" />
    </form>
  );
};

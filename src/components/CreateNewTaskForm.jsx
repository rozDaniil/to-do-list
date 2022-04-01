import React from "react";
import { Button } from "./Button";

export const CreateNewTaskForm = ({
  classes,
  placeholder,
  nameHandler,
  addTaskHandler,
  taskName,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (taskName === "" || taskName.split("").includes(",")) {
      // alert("Вы должны дать название!!!");
      return;
    }
    addTaskHandler(taskName);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={taskName}
        onChange={nameHandler}
        className={classes}
        placeholder={placeholder}
      />
      <Button create name="+" />
    </form>
  );
};

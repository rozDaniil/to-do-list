import React from "react";
import { Button } from "./Button";

export const CreateNewToDoForm = ({
  classes,
  placeholder,
  toDoNameHandler,
  toDoName,
  addToDoTask,
}) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (taskName === "" || taskName.split("").includes(",")) {
    //   // alert("Вы должны дать название!!!");
    //   return;
    // }
    addToDoTask(toDoName);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={toDoName}
        onChange={toDoNameHandler}
        className={classes}
        placeholder={placeholder}
      />
      <Button create name="+" />
    </form>
  );
};

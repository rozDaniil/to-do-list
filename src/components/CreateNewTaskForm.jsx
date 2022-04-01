import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "./Button";

export const CreateNewTaskForm = ({
  classes,
  placeholder,
  nameHandler,
  addTaskHandler,
  taskName,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (taskName === "" || taskName.split("").includes(",")) {
      // alert("Вы должны дать название!!!");
      return;
    }
    addTaskHandler(taskName);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          value={taskName}
          className={classes}
          placeholder={placeholder}
          {...register("task", {
            required: "Введите имя списка задач",
            onChange: nameHandler,
            minLength: { value: 3, message: "Минимум 3 символa" },
          })}
        />
        <Button create name="+" />
      </form>
      <div style={{ height: 40 }}>
        {errors?.task && <p>{errors?.task?.message || "Error!"}</p>}
      </div>
    </>
  );
};

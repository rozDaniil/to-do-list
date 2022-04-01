import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "./Button";

export const CreateNewToDoForm = ({
  classes,
  placeholder,
  toDoNameHandler,
  toDoName,
  addToDoTask,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (taskName === "" || taskName.split("").includes(",")) {
    //   // alert("Вы должны дать название!!!");
    //   return;
    // }
    addToDoTask(toDoName);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          value={toDoName}
          className={classes}
          placeholder={placeholder}
          {...register("todo", {
            required: "Введите задачу",
            onChange: toDoNameHandler,
            minLength: { value: 3, message: "Минимум 3 символa" },
          })}
        />
        <Button create name="+" />
      </form>
      <div style={{ height: 20 }}>
        {errors?.todo && <p>{errors?.todo?.message || "Error!"}</p>}
      </div>
    </>
  );
};

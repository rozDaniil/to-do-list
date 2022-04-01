import React from "react";

export const Button = ({
  name,
  colorButtons,
  del,
  create,
  onDeleteToDoHandler,
  onDeleteTaskHandler,
}) => {
  const classes = ["btn"];
  if (del) {
    classes.push("delete");
  }
  if (colorButtons) {
    classes.push("'color-buttons'");
  }
  if (create) {
    classes.push("create");
  }
  return (
    <button
      onClick={onDeleteToDoHandler || onDeleteTaskHandler}
      className={classes.join(" ")}
    >
      {name}
    </button>
  );
};

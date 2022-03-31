import React from "react";

export const Button = ({ name, colorButtons, del, create, label }) => {
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
    <button aria-label={label} className={classes.join(" ")}>
      {name}
    </button>
  );
};

import React from "react";

export const CurrentTaskList = ({
  tasks,
  openHandler,
  headerToggleHandler,
}) => {
  const liHandler = (text) => {
    openHandler();
    headerToggleHandler(text);
  };

  return (
    <ul className="task-list">
      {tasks.map((item, index) => (
        <li onClick={() => liHandler(item)} key={index} className="list-name">
          {item}
        </li>
      ))}
    </ul>
  );
};

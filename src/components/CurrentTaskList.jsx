import React from "react";

export const CurrentTaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((item, index) => (
        <li key={index} className="list-name">
          {item}
        </li>
      ))}
    </ul>
  );
};

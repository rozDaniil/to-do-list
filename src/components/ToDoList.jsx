import React from "react";
import { Button } from "./Button";
import { CreateNewTaskForm } from "./CreateNewTaskForm";

export const ToDoList = () => {
  return (
    <div className="todo-list container--mobile">
      <div className="todo-header">
        <h2 className="list-title">YouTube</h2>
        <p className="task-count">3 tasks remaining</p>
      </div>

      <div className="todo-body">
        <div className="tasks"></div>

        <div className="new-task-creator">
          <CreateNewTaskForm
            classes="new task"
            placeholder="new task name"
            label="new task name"
          />
        </div>

        <div className="delete-stuff">
          <Button del colorButtons name="Clear completed tasks" />
          <Button del colorButtons name="Delete list" />
        </div>
      </div>
    </div>
  );
};

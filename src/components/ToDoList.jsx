import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "./Button";
import { CreateNewToDoForm } from "./CreateNewToDoForm";
import {
  addToDoTask,
  addToDoName,
  setTaskDone,
  onClearDoneTasks,
  deleteToDo,
} from "../redux/actions/toDo";
import { deleteTask } from "../redux/actions/tasks";

export const ToDoList = ({ title }) => {
  const dispatch = useDispatch();

  const { toDoName, toDoLists, header, doneTasks } = useSelector(
    ({ toDo }) => toDo
  );
  const { tasksList } = useSelector(({ tasks }) => tasks);

  const setToDoNameHandler = (e) => {
    dispatch(addToDoName(e.target.value));
  };

  const addToDoTaskHandler = (text) => {
    dispatch(addToDoTask(text));
    dispatch(addToDoName(""));
  };

  const doneTask = (obj) => {
    dispatch(setTaskDone(obj));
  };

  const clearDoneTasksHandler = () => {
    dispatch(onClearDoneTasks());
  };

  const onDeleteHandler = () => {
    dispatch(deleteToDo());
    dispatch(deleteTask(tasksList[tasksList.indexOf(header)]));
  };

  console.log(toDoLists, doneTasks);

  return (
    <div className="todo-list container--mobile">
      <div className="todo-header">
        <h2 className="list-title">{title}</h2>
        <p className="task-count">
          {toDoLists[header].length === 0
            ? "You don`t have tasks yet"
            : `${
                doneTasks.length !== 0
                  ? toDoLists[header].length - doneTasks[header].length
                  : toDoLists[header].length
              } tasks remaining`}
        </p>
      </div>

      <div className="todo-body">
        {toDoLists[header].map((item, index) => (
          <div key={index} className="task">
            <input type="checkbox" id={index + item} />
            <label onClick={() => doneTask(item)} htmlFor={index + item}>
              <span className="custom-checkbox"></span>
              {item}
            </label>
          </div>
        ))}

        <div className="new-task-creator">
          <CreateNewToDoForm
            classes="new task"
            placeholder="new task name"
            label="new task name"
            toDoName={toDoName}
            toDoNameHandler={setToDoNameHandler}
            addToDoTask={addToDoTaskHandler}
          />
        </div>

        <div className="delete-stuff">
          <Button
            onDeleteToDoHandler={clearDoneTasksHandler}
            del
            colorButtons
            name="Clear completed tasks"
          />
          <Button
            onDeleteTaskHandler={onDeleteHandler}
            del
            colorButtons
            name="Delete list"
          />
        </div>
      </div>
    </div>
  );
};

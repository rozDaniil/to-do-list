import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { CurrentTaskList } from "./components/CurrentTaskList";
import { ToDoList } from "./components/ToDoList";
import { addTask, addToTasks } from "./redux/actions/tasks";

function App() {
  const dispatch = useDispatch();
  const { taskName, tasksList } = useSelector(({ tasks }) => tasks);

  const taskNameHandler = (e) => dispatch(addTask(e.target.value));
  const taskNameListHandler = (value) => {
    dispatch(addToTasks(value));
  };

  return (
    <div className="App">
      <h1 className="title">Stuff I need to do</h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="all-tasks container--mobile">
          <h2 className="task-list-title">My lists</h2>
          <CurrentTaskList tasks={tasksList} />
          <CreateNewTaskForm
            classes="new list"
            placeholder="new list name"
            label="new list name"
            nameHandler={taskNameHandler}
            addTaskHandler={taskNameListHandler}
            taskName={taskName}
          />
        </div>

        {tasksList.length > 0 ? <ToDoList /> : <ToDoList />}
      </div>

      {/* <template id="task-template">
        <div className="task">
          <input type="checkbox" />
          <label>
            <span className="custom-checkbox"></span>
          </label>
        </div>
      </template> */}
    </div>
  );
}

export default App;

import React from "react";
import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { CurrentTaskList } from "./components/CurrentTaskList";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [taskName, setTaskName] = React.useState("");
  const [taskNameList, setTaskNameList] = React.useState([]);
  console.log(taskNameList);

  const taskNameHandler = (e) => setTaskName(e.target.value);
  const taskNameListHandler = (value) => {
    setTaskNameList([...taskNameList, value]);
  };

  return (
    <div className="App">
      <h1 className="title">Stuff I need to do</h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="all-tasks container--mobile">
          <h2 className="task-list-title">My lists</h2>
          <CurrentTaskList tasks={taskNameList} />
          <CreateNewTaskForm
            classes="new list"
            placeholder="new list name"
            label="new list name"
            nameHandler={taskNameHandler}
            addTaskHandler={taskNameListHandler}
            taskName={taskName}
          />
        </div>

        <ToDoList />
      </div>

      <template id="task-template">
        <div className="task">
          <input type="checkbox" />
          <label>
            <span className="custom-checkbox"></span>
          </label>
        </div>
      </template>
    </div>
  );
}

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { CurrentTaskList } from "./components/CurrentTaskList";
import { ToDoList } from "./components/ToDoList";
import { addTask, addToTasks } from "./redux/actions/tasks";
import { setOpen, setHeader, addToDo } from "./redux/actions/toDo";

function App() {
  const dispatch = useDispatch();
  const { taskName, tasksList } = useSelector(({ tasks }) => tasks);
  const { isOpen, header } = useSelector(({ toDo }) => toDo);

  const taskNameHandler = (e) => dispatch(addTask(e.target.value));
  const taskNameListHandler = (value) => {
    dispatch(addToTasks(value));
    dispatch(addTask(""));
  };

  const openToDoList = () => {
    dispatch(setOpen(true));
  };

  const setToDoHeader = (text) => {
    dispatch(setHeader(text));
  };

  React.useEffect(() => {
    dispatch(addToDo(header));
  }, [header]);

  return (
    <div className="App">
      <h1 className="title">Stuff I need to do</h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="all-tasks container--mobile">
          <h2 className="task-list-title">My lists</h2>
          <CurrentTaskList
            headerToggleHandler={setToDoHeader}
            openHandler={openToDoList}
            tasks={tasksList}
          />
          <CreateNewTaskForm
            classes="new list"
            placeholder="new list name"
            nameHandler={taskNameHandler}
            addTaskHandler={taskNameListHandler}
            taskName={taskName}
          />
        </div>

        {isOpen ? <ToDoList title={header} /> : null}
      </div>
    </div>
  );
}

export default App;

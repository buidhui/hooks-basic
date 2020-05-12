import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/ToDoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Leaning react Hooks" },
    { id: 2, title: "Start FreeCodeCamp" },
    { id: 3, title: "Make a lunch" },
    { id: 4, title: "Do something" },
    { id: 5, title: "Go shopping" },
    { id: 6, title: "Have a meal" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Color Box</h1>
      <ColorBox />

      <h1>ToDo List</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;

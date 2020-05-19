import React, { useState, useEffect } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import axios from "axios";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";

import queryString from "query-string";
import FiltersForm from "./components/FiltersForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Leaning react Hooks" },
    { id: 2, title: "Start FreeCodeCamp" },
    { id: 3, title: "Make a lunch" },
    { id: 4, title: "Do something" },
    { id: 5, title: "Go shopping" },
    { id: 6, title: "Have a meal" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limt: 10,
    _totalRows: 1,
  });

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_search: "quis",
  });

  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const param = queryString.stringify(filter);
        const url = `https://js-post-api.herokuapp.com/api/posts?${param}`;
        const res = await axios.get(url);
        // const res = await fetch(url);
        // const resJSON = await res.json();
        const { data, pagination } = res.data;
        console.log(data);
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Error", error.message);
      }
    }

    fetchPostList();
  }, [filter]);

  function handleTodoClick(todo) {
    // console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    // console.log(newTodoList);
  }

  function handleToDoFormSubmit(formValues) {
    // console.log(formValues);
    const newToDo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newToDo);

    setTodoList(newTodoList);
    console.log(newTodoList);
  }

  function handlePageChange(newPage) {
    console.log(newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    console.log("New filters: ", newFilters);
    setFilter({
      ...filter,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="App">
      <h1>Color Box</h1>
      <ColorBox />

      <h1>ToDo List</h1>
      <ToDoForm onSubmit={handleToDoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />

      <h1>Post List</h1>
      <PostList posts={postList} />

      <FiltersForm onSubmit={handleFiltersChange} />
      <br />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />

      <h1>Clock </h1>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(!showClock)}>Hide Clock</button>
      <h1>Traffic Light</h1>
      <MagicBox />
    </div>
  );
}

export default App;

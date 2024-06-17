import React from "react";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  return (
    <>
      <h1>Todo App</h1>
      <TodoList />
    </>
  );
};

export default Home;

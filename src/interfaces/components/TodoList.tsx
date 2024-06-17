import { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../domain/Todo";

const sortTodos = (todos: Todo[]): Todo[] => {
  return todos.sort((a, b) => Number(a.completed) - Number(b.completed));
};

const todos = [
  {
    id: 1,
    title: "Do the dishes",
    completed: false,
    dateCreated: new Date(),
    dateCompleted: new Date(),
  },
  {
    id: 2,
    title: "Take the dog out for a walk",
    completed: true,
    dateCreated: new Date(),
    dateCompleted: new Date(),
  },
  {
    id: 3,
    title: "Do the dishes",
    completed: true,
    dateCreated: new Date(),
    dateCompleted: new Date(),
  },
  {
    id: 4,
    title: "Order a pizza before the football match",
    completed: false,
    dateCreated: new Date(),
    dateCompleted: new Date(),
  },
];

const TodoList: React.FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>(todos);

  function handleUpdateTodo(updatedTodo: Todo): void {
    const updatedTodos = todosList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));

    const sortedTodos = sortTodos(updatedTodos);

    setTodosList(sortedTodos);
  }

  return (
    <>
      {todosList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} handleUpdateTodo={handleUpdateTodo} />;
      })}
    </>
  );
};

export default TodoList;

import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../../domain/Todo";
import { useTodos } from "../hooks/useTodos";
import { Modal, Skeleton } from "antd";

const sortTodos = (todos: Todo[]): Todo[] => {
  return todos.sort((a, b) => Number(a.completed) - Number(b.completed));
};

const TodoList: React.FC = () => {
  const { todos, loading, error, addTodo, setTodos, setError, updateTodoTitle } = useTodos();

  const [todosList, setTodosList] = useState<Todo[]>(todos);
  const [todoBeingEdited, setTodoBeingEdited] = useState<number | undefined>();

  const handleUpdateTodo = (updatedTodo: Todo): void => {
    const updatedTodos = todosList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));

    const sortedTodos = sortTodos(updatedTodos);

    setTodosList(sortedTodos);
  };

  const handleTodoEditing = (idEdited: number) => {
    console.log(`todo ${idEdited} being edited`);
    setTodoBeingEdited(idEdited);
  };

  const resetModalError = () => {
    setError({
      hasError: false,
      message: null,
    });
  };

  return (
    <>
      {!todos.length && loading && (
        <Skeleton
          active
          paragraph={{
            rows: 4,
          }}
        />
      )}
      {todos.length && !loading ? (
        todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleUpdateTodo={handleUpdateTodo}
              handleTodoEditing={handleTodoEditing}
              todoBeingEdited={todoBeingEdited}
              updateTodoTitle={updateTodoTitle}
            />
          );
        })
      ) : (
        <h2>No todos saved so far. Add one below!</h2>
      )}

      <button onClick={addTodo}>Add todo</button>
      <Modal open={error.hasError} onOk={resetModalError} closable destroyOnClose>
        <p>There was an error while performing the action.</p>
        <p> Please, try again!</p>
      </Modal>
    </>
  );
};

export default TodoList;

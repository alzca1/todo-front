import { useState } from "react";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";
import { Modal, Skeleton } from "antd";

const TodoList: React.FC = () => {
  const { todos, loading, error, addTodo, setError, updateTodoTitle, toggleTodoStatus } =
    useTodos();

  const [todoBeingEdited, setTodoBeingEdited] = useState<number | undefined>();

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
              handleTodoEditing={handleTodoEditing}
              todoBeingEdited={todoBeingEdited}
              updateTodoTitle={updateTodoTitle}
              toggleTodoStatus={toggleTodoStatus}
            />
          );
        })
      ) : (
        <h2>No todos saved so far. Add one below!</h2>
      )}

      <button onClick={addTodo}>Add todo</button>
      <Modal
        open={error.hasError}
        onOk={resetModalError}
        closable
        destroyOnClose
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>There was an error while performing the action.</p>
        <p> Please, try again!</p>
      </Modal>
    </>
  );
};

export default TodoList;

import React, { useEffect, useState } from "react";
import { Col, Input } from "antd";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Todo } from "../../domain/Todo";

interface TodoItemProps {
  todo: Todo;
  handleUpdateTodo: (arg: Todo) => void;
  handleTodoEditing: (arg: number) => void;
  todoBeingEdited: number | undefined;
}
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleUpdateTodo,
  handleTodoEditing,
  todoBeingEdited,
}) => {
  const [todoDetails, setTodoDetails] = useState({
    ...todo,
  });

  const { id, title, completed } = todoDetails;

  const [isBeingEdited, setIsBeingEdited] = useState(false);

  const toggleCompleted = () => {
    setTodoDetails((prevState) => ({
      ...prevState,
      completed: true,
    }));
  };

  useEffect(() => {
    if (todoBeingEdited !== id) {
      setIsBeingEdited(false);
    }
  });

  const toggleEdit = () => {
    if (!isBeingEdited) {
      handleTodoEditing(id);
    }
    setIsBeingEdited((prevState) => !prevState);
  };

  const handleChangeTitle = (e: any) => {
    e.preventDefault();
    setTodoDetails((prevState) => ({
      ...prevState,
      title: e.target.value.trim() != "" ? e.target.value : "Add a todo here...",
    }));
  };
  return (
    <Col>
      <div className="Todo">
        <div onClick={toggleCompleted}>
          {completed ? (
            <div className="completed">
              <CheckCircleOutlined />
            </div>
          ) : (
            <div className="pending">
              <ExclamationCircleOutlined />
            </div>
          )}
        </div>
        <div>
          {isBeingEdited ? (
            <Input
              className="todo-input"
              onBlur={toggleEdit}
              placeholder={title}
              onChange={handleChangeTitle}
            />
          ) : (
            <span onClick={toggleEdit} className={completed ? "dashed" : ""}>
              {title}
            </span>
          )}
        </div>
      </div>
    </Col>
  );
};

export default TodoItem;

import React, { useEffect, useState } from "react";
import { Card, Col, Input } from "antd";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Todo } from "../../domain/Todo";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [todoItemInfo, setTodoItemInfo] = useState({
    isBeingEdited: false,
    todoDetails: todo,
  });
  const { id, title, dateCreated, dateCompleted, completed } = todoItemInfo.todoDetails;
  const { isBeingEdited } = todoItemInfo;

  const toggleCompleted = () => {
    setTodoItemInfo((prevState) => ({
      ...prevState,
      todoDetails: {
        ...prevState.todoDetails,
        completed: !prevState.todoDetails.completed,
      },
    }));
  };

  const toggleEdit = () => {
    setTodoItemInfo((prevState) => ({
      ...prevState,
      isBeingEdited: !prevState.isBeingEdited,
    }));
  };

  const handleChangeTitle = (e: any) => {
    e.preventDefault();
    const newTitle = e.target.value;
    setTodoItemInfo((prevState) => ({
      ...prevState,
      todoDetails: {
        ...prevState.todoDetails,
        title: newTitle,
        completed: false,
      },
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

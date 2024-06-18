import { useState, useEffect } from "react";
import { Todo } from "../../domain/Todo";
import { createTodo, getAllTodos, updateTodo } from "../../infrastructure/api/TodoApi";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState({
    hasError: false,
    message: null,
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getAllTodos();
        setTodos(todos);
      } catch (error: any) {
        setError({
          hasError: true,
          message: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title: string) => {
    try {
      const newTodo = await createTodo(title);
      setTodos([...todos, newTodo]);
    } catch (error) {
      setError({ hasError: true, message: error.message });
    }
  };

  const updateTodoTitle = async (id: number, title: string) => {
    let newTodos: Todo[];
    try {
      const updatedTodo = await updateTodo(id, title);
      if (updatedTodo.id) {
        newTodos = todos.map((todo) => (todo.id == id ? updatedTodo : todo));
        setTodos(newTodos);
      }
    } catch (error: any) {
      setError({ hasError: true, message: error.message });
    }
  };

  return { todos, loading, error, setError, addTodo, setTodos, updateTodoTitle };
};

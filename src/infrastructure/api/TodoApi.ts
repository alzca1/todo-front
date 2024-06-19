import { Todo } from "../../domain/Todo";
import apiClient from "./ApiClient";

const getAllTodos = async (): Promise<Todo[]> => {
  try {
    const response = await apiClient.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }
};

const updateTodo = async (id: number, title: string): Promise<Todo> => {
  try {
    const response = await apiClient.patch("/update-todo", { id, title });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update todo: ${error.message}`);
  }
};

const toggleTodoCompleted = async (id: number, completed: boolean): Promise<Todo> => {
  try {
    const response = await apiClient.patch("/toggle-completed", { id, completed });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to toggle todo's completion status: ${error.message}`);
  }
};

const createTodo = async (title: string): Promise<Todo> => {
  try {
    const response = await apiClient.post("/create-todo", { title });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create a todo: ${error.message}`);
  }
};

export { getAllTodos, updateTodo, toggleTodoCompleted, createTodo };

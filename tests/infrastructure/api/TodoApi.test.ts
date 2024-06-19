import {
  createTodo,
  getAllTodos,
  toggleTodoCompleted,
  updateTodo,
} from "../../../src/infrastructure/api/TodoApi";
import apiClient from "../../../src/infrastructure/api/ApiClient";
import { Todo } from "../../../src/domain/Todo";

jest.mock("../../../src/infrastructure/api/ApiClient");

describe("TodoApi", () => {
  const mockTodo: Todo = {
    id: 1,
    title: "Test todo",
    completed: false,
    dateCreated: new Date(),
    dateCompleted: undefined,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllTodos", () => {
    it("should fetch all stored todos", async () => {
      (apiClient.get as jest.Mock).mockResolvedValue({ data: [mockTodo] });

      const todos = await getAllTodos();
      expect(apiClient.get).toHaveBeenLastCalledWith("/todos");
      expect(todos).toEqual([mockTodo]);
    });

    it("should throw and error if GET call fails", async () => {
      (apiClient.get as jest.Mock).mockRejectedValue(new Error("Server error"));
      await expect(getAllTodos()).rejects.toThrow("Failed to fetch todos: Server error");
    });
  });

  describe("updateTodo", () => {
    it("should update a todo", async () => {
      const updatedTodo = { ...mockTodo, title: "Updated title" };
      (apiClient.patch as jest.Mock).mockResolvedValue({ data: updatedTodo });

      const result = await updateTodo(mockTodo.id, "Updated title");
      expect(apiClient.patch).toHaveBeenCalledWith("/update-todo", {
        id: mockTodo.id,
        title: "Updated title",
      });
      expect(result).toEqual(updatedTodo);
    });

    it("should throw an error if PATCH call fails", async () => {
      (apiClient.patch as jest.Mock).mockRejectedValue(new Error("Server error"));
      await expect(updateTodo(mockTodo.id, "Updated title")).rejects.toThrow(
        "Failed to update todo: Server error"
      );
    });
  });

  describe("toggleTodoCompleted", () => {
    it("should toggle the completion status of a todo", async () => {
      const toggledTodo = { ...mockTodo, completed: true };
      (apiClient.patch as jest.Mock).mockResolvedValue({ data: toggledTodo });

      const result = await toggleTodoCompleted(mockTodo.id, true);
      expect(apiClient.patch).toHaveBeenCalledWith("/toggle-completed", {
        id: mockTodo.id,
        completed: true,
      });
      expect(result).toEqual(toggledTodo);
    });

    it("should throw an error if PATCH call fails", async () => {
      (apiClient.patch as jest.Mock).mockRejectedValue(new Error("Server error"));
      await expect(toggleTodoCompleted(mockTodo.id, true)).rejects.toThrow(
        "Failed to toggle todo's completion status: Server error"
      );
    });
  });

  describe("createTodo", () => {
    it("should create a todo", async () => {
      (apiClient.post as jest.Mock).mockResolvedValue({ data: mockTodo });

      const result = await createTodo("Test todo");

      expect(apiClient.post).toHaveBeenCalledWith("/create-todo", { title: "Test todo" });
      expect(result).toEqual(mockTodo);
    });
  });
});

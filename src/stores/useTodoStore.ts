import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TodoState {
  todoList: string[];
  setTodoList: (todoList: string[]) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools((set) => ({
    todoList: [],
    setTodoList: (todoList) => set({ todoList }),
  })),
);

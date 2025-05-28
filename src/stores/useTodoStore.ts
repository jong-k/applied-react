import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface TodoState {
  todoList: string[];
  setTodoList: (todoList: string[]) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todoList: [],
        setTodoList: (todoList) => set({ todoList }),
      }),
      {
        name: "todo-list",
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

import { useState } from "react";
import { useTodoStore } from "../stores";

export default function TodoListHeader() {
  const { todoList, setTodoList } = useTodoStore();
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    setTodoList([...todoList, todoText]);
    setTodoText("");
  };

  return (
    <div className="flex gap-2 items-center">
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={addTodo}>추가</button>
    </div>
  );
}

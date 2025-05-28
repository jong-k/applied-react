import { useState } from "react";

export default function TodoListHeader() {
  const [todoText, setTodoText] = useState("");

  return (
    <div className="flex gap-2 items-center">
      <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button>추가</button>
    </div>
  );
}

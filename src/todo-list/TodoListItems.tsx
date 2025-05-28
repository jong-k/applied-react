import { useTodoStore } from "../stores";

export default function TodoListItems() {
  const { todoList } = useTodoStore();

  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}

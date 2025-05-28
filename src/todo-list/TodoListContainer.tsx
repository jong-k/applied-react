import TodoListHeader from "./TodoListHeader";
import TodoListItems from "./TodoListItems";

export default function TodoListContainer() {
  return (
    <div className="flex flex-col gap-4">
      <TodoListHeader />
      <TodoListItems />
    </div>
  );
}

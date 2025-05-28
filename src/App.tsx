import { Link } from "react-router";

export default function App() {
  return (
    <div className="flex gap-4 flex-col">
      <Link to="/quotes">속담 리스트</Link>
      <Link to="/todo">할 일 리스트</Link>
    </div>
  );
}

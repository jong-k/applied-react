import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Quotes from "./Quotes.tsx";
import TodoListContainer from "./todo-list/TodoListContainer.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/todo" element={<TodoListContainer />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

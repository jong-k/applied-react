import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Quotes from "./Quotes.tsx";
import TodoListContainer from "./todo-list/TodoListContainer.tsx";
import "./i18n";
import ApiTestPage from "./pages/ApiTestPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/todo" element={<TodoListContainer />} />
        <Route path="/api-test" element={<ApiTestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

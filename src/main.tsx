import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { HomePage, QuotesPage, TodoPage, ApiTestPage } from "./pages";
import "./features/i18n/config";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/api-test" element={<ApiTestPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

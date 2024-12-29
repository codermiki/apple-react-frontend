import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

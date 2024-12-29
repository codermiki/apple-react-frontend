import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/commonResource/css/bootstrap.css";
import "../src/commonResource/css/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.jsx";
// import SingleAppleProduct from "./Components/SingleAppleProduct/SingleAppleProduct.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/tailwind/tailwind.css"; // Tailwind CSS                                                    │
import "../public/assets/css/theme.css"; // Theme CSS                                                       │
import "../public/assets/fonts/icons/tabler-icons/tabler-icons.css"; // Tabler Icons CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// Initialize Preline UI components after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.HSStaticMethods.autoInit();
});

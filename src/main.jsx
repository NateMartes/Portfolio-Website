import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TheSecretOfUs from "./TheSecretOfUs/TheSecretOfUs.jsx";
import NotFound from "./NotFound.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thesecretofus" element={<TheSecretOfUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

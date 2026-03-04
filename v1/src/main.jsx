import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppV2 from "./v2/App";

import TheSecretOfUs from "./TheSecretOfUs/TheSecretOfUs.jsx";
import NotFound from "./NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppV2 />} />
      <Route path="/thesecretofus" element={<TheSecretOfUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

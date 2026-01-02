import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppV1 from "./v1/App";
import TheSecretOfUs from "./TheSecretOfUs/TheSecretOfUs.jsx";
import NotFound from "./NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppV1 />} />
      <Route path="/v1" element={<AppV1 />} />
      <Route path="/thesecretofus" element={<TheSecretOfUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

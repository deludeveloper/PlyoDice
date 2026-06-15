import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PlyoDice from "./PlyoDice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlyoDice />
  </StrictMode>
);

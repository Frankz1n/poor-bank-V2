import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./app/routes/index.tsx";
import GlobalStyle from "./GlobalStyles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>
);

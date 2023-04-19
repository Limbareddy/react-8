import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContext, DetailsProvider } from "./context/CartContext";
import App from "./App";

import Error from "./pages/Error";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { CartContext };
console.log();
root.render(
  <StrictMode>
    <BrowserRouter>
      <DetailsProvider>
        <App />
      </DetailsProvider>
    </BrowserRouter>
  </StrictMode>
);

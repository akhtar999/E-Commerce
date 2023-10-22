import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
// product provider
import ProductProvider from "./contexts/ProductContext.jsx";
// sidebar provider
import SidebarProvider from "./contexts/SideBarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ProductProvider>
  </SidebarProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LanguageContext from "./context/LanguageContext.jsx";
import ProductContext from "./context/ProductContext.jsx";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContext>
      <ProductContext>
        <App />
      </ProductContext>
    </LanguageContext>
  </React.StrictMode>
);

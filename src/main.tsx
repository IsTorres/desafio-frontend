import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GlobalProvider from "./contexts/GlobalContext.tsx";
import CreditCardProvider from "./contexts/CreditCardContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <CreditCardProvider>
        <App />
      </CreditCardProvider>
    </GlobalProvider>
  </React.StrictMode>
);

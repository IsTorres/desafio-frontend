import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Homfdsdfsfsdfse</h1>
        <ul>
          <li>
            <a href="/product/">Product</a>
          </li>
          <li>
            <a href="/pages/checkout/">Checkout</a>
          </li>
          <li>
            <a href="/">home</a>
          </li>
        </ul>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

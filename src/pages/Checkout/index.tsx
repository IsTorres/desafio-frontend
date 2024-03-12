import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

export default function Checkout() {
  return (
    <>
      <div>
        <h1>Checkout</h1>
        <a href="/">home</a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);

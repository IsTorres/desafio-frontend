import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function Product() {
  return (
    <>
      <div>
        <h1>Product</h1>
        <a href="/">home</a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
);

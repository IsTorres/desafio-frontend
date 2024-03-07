import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function ShoppingCart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        <li>
          <a href="/pages/product/">Product</a>
        </li>
        <li>
          <a href="/pages/checkout/">Checkout</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCart />
  </React.StrictMode>
);

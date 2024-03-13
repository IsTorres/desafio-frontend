import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

export default function ShoppingCart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <ul>
        <li>
          <a href="/product/">Product</a>
        </li>
        <li>
          <a href="/checkout/">Checkout</a>
        </li>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
    </>
  );
}

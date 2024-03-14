import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ShoppingList() {
  const { productsCart = [] } = useContext(GlobalContext);

  const estadoSalvo = JSON.parse(localStorage.getItem("myState") || "{}");
  return (
    <>
      {estadoSalvo.length < 1 ? (
        <p>The Cart is empty</p>
      ) : (
        <p>{JSON.stringify(estadoSalvo)}</p>
      )}
    </>
  );
}

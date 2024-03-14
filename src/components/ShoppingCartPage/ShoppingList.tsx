import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";

export default function ShoppingList() {
  const { clearCart } = useContext(AppContext);
  const myState = JSON.parse(localStorage.getItem("myState") || "{}");
  return (
    <>
      {myState.length < 1 ? (
        <p>The Cart is empty</p>
      ) : (
        <p>{JSON.stringify(myState)}</p>
      )}

      <button onClick={clearCart}>clear Cart</button>
    </>
  );
}

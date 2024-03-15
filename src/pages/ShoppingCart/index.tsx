import FinishBuy from "../../components/ShoppingCartPage/FinishBuy";
import ShoppingList from "../../components/ShoppingCartPage/ShoppingList";
import { myState } from "../../utils";

export default function ShoppingCart() {
  return (
    <>
      <h1>Shopping Cart</h1>
      {myState.length < 1 ? <h2>The Cart is empty</h2> : <ShoppingList />}
      <FinishBuy />
    </>
  );
}

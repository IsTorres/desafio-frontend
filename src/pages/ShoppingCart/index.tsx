import { useContext } from "react";
import ShoppingList from "../../components/ShoppingCartPage/ShoppingList";
import { AppContext } from "../../contexts/GlobalContext";

export default function ShoppingCart() {
  const { clearCart, productsCart } = useContext(AppContext);
  return (
    <>
      <h1>Shopping Cart</h1>
      <ShoppingList />
      <div>
        <button
          disabled={productsCart.length > 0 ? false : true}
          onClick={clearCart}
        >
          Clear cart
        </button>
        <a href="/checkout">
          <button>Checkout</button>
        </a>
      </div>
    </>
  );
}

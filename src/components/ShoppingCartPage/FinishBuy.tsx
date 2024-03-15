import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";

export default function FinishBuy() {
  const { clearCart, productsCart } = useContext(AppContext);

  console.log(productsCart);
  return (
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
  );
}

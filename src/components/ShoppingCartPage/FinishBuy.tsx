import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { FinishBuyDiv } from "./styles";

export default function FinishBuy() {
  const { clearCart, productsCart } = useContext(AppContext);

  const total = productsCart.reduce((acc, item) => {
    return acc + item.price * item.qtd;
  }, 0);

  return (
    <FinishBuyDiv>
      <button
        disabled={productsCart.length > 0 ? false : true}
        onClick={clearCart}
      >
        Clear cart
      </button>
      <h2>Total: {total.toFixed(2)}</h2>
      <a href="/checkout">
        <button>Checkout</button>
      </a>
    </FinishBuyDiv>
  );
}

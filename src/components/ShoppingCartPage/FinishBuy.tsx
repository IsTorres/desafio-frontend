import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { FinishBuyDiv } from "./styles";

export default function FinishBuy() {
  const { clearCart, productsCart } = useContext(AppContext);

  //   console.log(productsCart);
  return (
    <FinishBuyDiv>
      <button
        disabled={productsCart.length > 0 ? false : true}
        onClick={clearCart}
      >
        Clear cart
      </button>
      <h2>Total: </h2>
      <a href="/checkout">
        <button>Checkout</button>
      </a>
    </FinishBuyDiv>
  );
}

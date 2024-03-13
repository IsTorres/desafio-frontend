import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { BuyButton } from "./styles";

export default function BuyButtonComponent() {
  return (
    <BuyButton className="card-info">
      <button>
        <FaMinusCircle />
      </button>
      <button className="buy-button">Comprar</button>
      <button>
        <FaPlusCircle />
      </button>
    </BuyButton>
  );
}

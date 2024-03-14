import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Buttons, BuyButton, ActionButtons } from "./styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

export default function BuyButtonComponent({ id }: { id: number }) {
  const { addProduct } = useContext(GlobalContext);

  return (
    <Buttons>
      {/* <ActionButtons onClick={() => removeProduct(id)}>
        <FaMinusCircle />
      </ActionButtons> */}
      <BuyButton onClick={() => addProduct(id)}>Add to Cart</BuyButton>
      {/* <ActionButtons onClick={() => addProduct(id)}>
        <FaPlusCircle />
      </ActionButtons> */}
    </Buttons>
  );
}

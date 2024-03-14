import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { Buttons, BuyButton } from "./styles";

export default function BuyButtonComponent({ id }: { id: number }) {
  const { addProduct } = useContext(AppContext);

  return (
    <Buttons>
      <BuyButton onClick={() => addProduct(id)}>Add to Cart</BuyButton>
    </Buttons>
  );
}

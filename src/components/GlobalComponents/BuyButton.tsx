import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { Btns, BuyBtn } from "./styles";

export default function BuyButtonComponent({ id }: { id: number }) {
  const { addProduct } = useContext(AppContext);

  return (
    <Btns>
      <BuyBtn onClick={() => addProduct(id)}>Add to Cart</BuyBtn>
    </Btns>
  );
}

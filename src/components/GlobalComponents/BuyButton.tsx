import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { Btns, BuyBtn } from "./styles";
import { Comic } from "../../types/Comic";

export default function BuyButtonComponent({ item }: { item: Comic }) {
  const { addProduct } = useContext(AppContext);

  return (
    <Btns>
      <BuyBtn onClick={() => addProduct(item.id, item.prices[0].price)}>
        Add to Cart
      </BuyBtn>
    </Btns>
  );
}

import { useContext } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { AppContext } from "../../contexts/GlobalContext";
import { Comic } from "../../types/Comic";
import { Btns, BuyBtn } from "./styles";

export default function ActionButtons({ item }: { item: Comic }) {
  const { addProduct, removeProduct, showQtd } = useContext(AppContext);

  return (
    <Btns>
      {/* remove itens */}
      <BuyBtn onClick={() => removeProduct(item.id)}>
        <FaCircleMinus />
      </BuyBtn>
      <div>
        <h4>Units: {showQtd(item.id)}</h4>
        <h4>Price: U${item.prices[0].price}</h4>
      </div>
      {/* adiciona itens */}
      <BuyBtn onClick={() => addProduct(item.id, item.prices[0].price)}>
        <FaCirclePlus />
      </BuyBtn>
    </Btns>
  );
}

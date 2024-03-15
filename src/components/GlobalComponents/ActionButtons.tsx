import { useContext } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { AppContext } from "../../contexts/GlobalContext";
import { Comic } from "../../types/Comic";
import { Btns, BuyBtn } from "./styles";

export default function ActionButtons({ item }: { item: Comic }) {
  const { addProduct, removeProduct, showQtd } = useContext(AppContext);

  console.log(showQtd(item.id), "action");

  return (
    <Btns>
      <BuyBtn onClick={() => removeProduct(item.id)}>
        <FaCircleMinus />
      </BuyBtn>
      <div>
        <h4>Units: {showQtd(item.id)}</h4>
        <h4>Price: U${item.prices[0].price}</h4>
      </div>
      <BuyBtn onClick={() => addProduct(item.id, 10)}>
        <FaCirclePlus />
      </BuyBtn>
    </Btns>
  );
}

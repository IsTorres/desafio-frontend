import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";
import { Btns, BuyBtn } from "./styles";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { Comic } from "../../types/Comic";
import { myState } from "../../utils";

export default function ActionButtons({ item }: { item: Comic }) {
  const { addProduct, removeProduct } = useContext(AppContext);

  const showQtd = (item: Comic) => {
    return myState.find((el) => el.id === item.id)?.qtd || null;
  };

  // console.log(item.prices[0].price, "action");

  return (
    <Btns>
      <BuyBtn onClick={() => removeProduct(item.id)}>
        <FaCircleMinus />
      </BuyBtn>
      <div>
        <h4>Units: {showQtd(item)}</h4>
        <h4>Price: U${item.prices[0].price}</h4>
      </div>
      <BuyBtn onClick={() => addProduct(item.id, 10)}>
        <FaCirclePlus />
      </BuyBtn>
    </Btns>
  );
}

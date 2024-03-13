import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Buttons, BuyButton, ActionButtons } from "./styles";

export default function BuyButtonComponent() {
  return (
    <Buttons>
      <ActionButtons>
        <FaMinusCircle />
      </ActionButtons>
      <BuyButton>Buy</BuyButton>
      <ActionButtons>
        <FaPlusCircle />
      </ActionButtons>
    </Buttons>
  );
}

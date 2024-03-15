// import { brand } from "../../../public/images/brand"
import { useContext } from "react";
import { CreditCardContext } from "../../contexts/CreditCardContext";
import { BackCardContainer, Stripe, Cvv, Brand } from "./styles";
import { cardPlaceholder } from "../../utils";
import { brand } from "../../assets/brand";

export default function BackCard() {
  const { cardData } = useContext(CreditCardContext);

  return (
    <BackCardContainer>
      <Stripe />
      <Cvv>{cardData.cvv !== "" ? cardData.cvv : cardPlaceholder.cvv}</Cvv>
      <Brand>
        <div className="brand-position">{brand}</div>
      </Brand>
    </BackCardContainer>
  );
}

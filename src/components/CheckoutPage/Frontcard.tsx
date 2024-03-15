// import { brand } from "../../../public/images/brand"
import { useContext } from "react";
import { CreditCardContext } from "../../contexts/CreditCardContext";
import {
  FrontCardContainer,
  CardNumberWrapper,
  CardNumber,
  CardDetails,
  CardLabel,
  CardValue,
} from "./styles";
import { cardPlaceholder } from "../../utils";
import { brand } from "../../assets/brand";

export default function FrontCard() {
  const { cardData } = useContext(CreditCardContext);

  return (
    <FrontCardContainer>
      <div className="brand-position">{brand}</div>
      <CardNumberWrapper>
        <CardNumber>
          {cardData.numbers !== ""
            ? cardData.numbers
            : cardPlaceholder.cardNumber}
        </CardNumber>
      </CardNumberWrapper>
      <CardDetails>
        <CardLabel>
          <p className="font-bold">Cardholder</p>
          <CardValue className="truncate">
            {cardData.cardHolder !== ""
              ? cardData.cardHolder
              : cardPlaceholder.cardHolder}
          </CardValue>
        </CardLabel>
        <CardLabel className="text-end">
          <p className="font-bold">Expires</p>
          <CardValue className="w-full">
            {cardData.expiresMonth !== ""
              ? cardData.expiresMonth
              : cardPlaceholder.expiresMonth}
            /
            {cardData.expiresYear !== ""
              ? cardData.expiresYear
              : cardPlaceholder.expiresYear}
          </CardValue>
        </CardLabel>
      </CardDetails>
    </FrontCardContainer>
  );
}

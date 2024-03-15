import CreditCard from "../../components/CheckoutPage/CreditCard";
import CreditCardForm from "../../components/CheckoutPage/CreditCardForm";
import {
  GridLeft,
  GridRight,
  MainContainer,
} from "../../components/CheckoutPage/styles";

export default function Checkout() {
  return (
    <>
      <h1>Checkout</h1>
      <MainContainer>
        <GridRight>
          <CreditCardForm />
        </GridRight>

        <GridLeft>
          <CreditCard />
        </GridLeft>
      </MainContainer>
    </>
  );
}

import { useContext } from "react";
import BackCard from "./BackCard";
import FrontCard from "./Frontcard";
import { Card, CardContainer } from "./styles";
import { CreditCardContext } from "../../contexts/CreditCardContext";

const CreditCard = () => {
  const { cardData } = useContext(CreditCardContext);

  const dale = cardData.side === "front" ? "rotateY(0)" : "rotateY(180deg)";

  return (
    <CardContainer>
      <Card style={{ transform: `${dale}` }}>
        {cardData.side === "front" ? <FrontCard /> : <BackCard />}
      </Card>
    </CardContainer>
  );
};
export default CreditCard;

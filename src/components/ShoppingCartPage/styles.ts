import { styled } from "styled-components";

export const ShoppingItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  section {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    margin: 10px;
    padding: 10px;
    box-shadow: 3px 3px 5px #2424249c;
  }

  img {
    width: 210px;
    height: 310px;
    border-radius: 10px;
    margin: 1% 3%;
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column;
      align-items: center;
      width: auto;
    }
  }
`;

export const InfoDivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    font-size: 25px;
  }
`;

export const ActionBtnsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const FinishBuyDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3% 10% 10%;
`;

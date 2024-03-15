import { createContext, useState } from "react";

type CardState = {
  cardData: {
    cardHolder: string;
    setCardHolder: (el: string) => void;
    numbers: string;
    setNumbers: (el: string) => void;
    expiresMonth: string;
    setExpiresMonth: (el: string) => void;
    expiresYear: string;
    setExpiresYear: (el: string) => void;
    cvv: string;
    setCVV: (el: string) => void;
    side: string;
    setSide: (el: string) => void;
  };
};

export const CreditCardContext = createContext({} as CardState);

const initialState = {
  numbers: "",
  cardHolder: "",
  expiresMonth: "",
  expiresYear: "",
  cvv: "",
  side: "front",
};

export default function CreditCardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [card, setCard] = useState(initialState);

  const value = {
    cardData: {
      cardHolder: card.cardHolder,
      setCardHolder: (el: string) => setCard({ ...card, cardHolder: el }),
      numbers: card.numbers,
      setNumbers: (el: string) => setCard({ ...card, numbers: el }),
      expiresMonth: card.expiresMonth,
      setExpiresMonth: (el: string) => setCard({ ...card, expiresMonth: el }),
      expiresYear: card.expiresYear,
      setExpiresYear: (el: string) => setCard({ ...card, expiresYear: el }),
      cvv: card.cvv,
      setCVV: (el: string) => setCard({ ...card, cvv: el }),
      side: card.side,
      setSide: (el: string) => setCard({ ...card, side: el }),
    },
  };

  return (
    <CreditCardContext.Provider value={value}>
      {children}
    </CreditCardContext.Provider>
  );
}

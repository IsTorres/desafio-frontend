import { createContext, useState } from "react";
type itemCart = {
  id: number;
  qtd: number;
  price: number;
};

type ContextProps = {
  productsCart: itemCart[];
  addProduct: (id: number, price: number) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
  sumQtd: () => number;
  showQtd: (id: number) => number | null;
  // cardState: CardState;
};

export const AppContext = createContext({} as ContextProps);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const myState: itemCart[] = JSON.parse(
    localStorage.getItem("myState") || "[]",
  );
  const [productsCart, setProductsCart] = useState<itemCart[]>(myState);

  const addProduct = (id: number, price: number) => {
    const updatedProductsCart = [...productsCart];
    const existingProductIndex = updatedProductsCart.findIndex(
      (product) => product.id === id,
    );

    if (existingProductIndex === -1) {
      // Se o produto não existe no carrinho, adicionamos ele com quantidade 1
      updatedProductsCart.push({ id, qtd: 1, price });
    } else {
      // Se o produto já existe no carrinho, incrementamos apenas a quantidade
      updatedProductsCart[existingProductIndex].qtd += 1;
    }

    setProductsCart(updatedProductsCart);
    localStorage.setItem("myState", JSON.stringify(updatedProductsCart));
  };

  const removeProduct = (id: number) => {
    const updatedProductsCart = [...productsCart];
    const existingProductIndex = updatedProductsCart.findIndex(
      (product) => product.id === id,
    );

    if (
      existingProductIndex !== -1 &&
      updatedProductsCart[existingProductIndex].qtd > 1
    ) {
      // Se o produto existe no carrinho e a quantidade é maior que 1, decrementamos a quantidade
      updatedProductsCart[existingProductIndex].qtd -= 1;
    } else {
      // Se o produto não existe no carrinho ou a quantidade é 1, removemos o produto do carrinho
      updatedProductsCart.splice(existingProductIndex, 1);
      window.location.reload();
    }

    setProductsCart(updatedProductsCart);
    localStorage.setItem("myState", JSON.stringify(updatedProductsCart));
  };

  const clearCart = () => {
    setProductsCart([]);
    localStorage.setItem("myState", JSON.stringify([]));
    window.location.reload();
  };

  const sumQtd = () => {
    return productsCart.reduce((acc, item) => item.qtd + acc, 0);
  };

  const showQtd = (id: number) => {
    return myState.find((el) => el.id === id)?.qtd || null;
  };

  const value = {
    productsCart,
    addProduct,
    removeProduct,
    clearCart,
    sumQtd,
    showQtd,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

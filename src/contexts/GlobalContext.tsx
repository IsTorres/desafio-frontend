import { createContext, useState } from "react";
type itemCart = {
  id: number;
  qtd: number;
};

type ContextProps = {
  productsCart: itemCart[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
};

export const GlobalContext = createContext({} as ContextProps);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const myState = JSON.parse(localStorage.getItem("myState") || "[]");
  const [productsCart, setProductsCart] = useState<itemCart[]>(myState);

  const addProduct = (id: number) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (!item) {
      copyProductsCart.push({ id, qtd: 1 });
    } else {
      item.qtd += 1;
    }

    setProductsCart(copyProductsCart);
    localStorage.setItem("myState", JSON.stringify(copyProductsCart));
    console.log(copyProductsCart, "asdf");
  };

  const removeProduct = (id: number) => {
    const copyProductCart = [...productsCart];

    const item = copyProductCart.find((product) => product.id === id);
    if (item && item.qtd > 1) {
      item.qtd -= 1;
      setProductsCart(copyProductCart);
    } else {
      const arrayFiltered = copyProductCart.filter(
        (product) => product.id !== id
      );
      setProductsCart(arrayFiltered);
    }
  };

  const clearCart = () => {
    console.log(productsCart, "clear");
    setProductsCart([]);
  };

  const value = { productsCart, addProduct, removeProduct, clearCart };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

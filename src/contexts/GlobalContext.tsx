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
  sumQtd: () => number;
};

export const AppContext = createContext({} as ContextProps);

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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
      localStorage.setItem("myState", JSON.stringify(arrayFiltered));
    }
  };

  const clearCart = () => {
    console.log(productsCart, "clear");
    setProductsCart([]);
    localStorage.setItem("myState", JSON.stringify([]));
  };

  const sumQtd = () => {
    return productsCart.reduce((acc, item) => item.qtd + acc, 0);
  };

  const value = { productsCart, addProduct, removeProduct, clearCart, sumQtd };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

import { createContext, useState } from "react";

let defaultValue: any;

export const GlobalContext = createContext(defaultValue);

export default function GlobalProvider({ children }: any) {
  const [myComic, setMyComic] = useState([]);
  return (
    <GlobalContext.Provider value={{ myComic, setMyComic }}>
      {children}
    </GlobalContext.Provider>
  );
}

import { useEffect, useState } from "react";
import { useFetchArrayComics } from "../../hooks/useFetchArrayComics";
import { Comic } from "../../types/Comic";
import { comicCoverImg } from "../../utils";
import ActionButtons from "../GlobalComponents/ActionButtons";
import { ActionBtnsDiv, InfoDivCard, ShoppingItemCard } from "./styles";

export default function ShoppingList() {
  const [fetchCalled, setFetchCalled] = useState<boolean>(false);
  const myState: { id: number; qtd: number }[] = JSON.parse(
    localStorage.getItem("myState") || "{}"
  );

  const { comicArrayInfo, getComicArray } = useFetchArrayComics();

  const formatedArray = myState.map((product) => String(product.id));

  useEffect(() => {
    if (!fetchCalled) {
      getComicArray(formatedArray);
      setFetchCalled(true);
    }
  }, [comicArrayInfo, fetchCalled]);

  return (
    <>
      {myState.length < 1 ? (
        <p>The Cart is empty</p>
      ) : comicArrayInfo ? (
        <>
          <p>{JSON.stringify(myState)}</p>
          <ShoppingItemCard>
            {comicArrayInfo.map((item) => {
              return (
                <section key={item.id}>
                  <img src={comicCoverImg(item)} alt={item.title} />
                  <InfoDivCard>
                    <h3>{item.title}</h3>
                    <ActionButtons item={item} />
                  </InfoDivCard>
                </section>
              );
            })}
          </ShoppingItemCard>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

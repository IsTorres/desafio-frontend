import { useEffect, useState } from "react";
import { useFetchArrayComics } from "../../hooks/useFetchArrayComics";
import { comicCoverImg, myState } from "../../utils";
import ActionButtons from "../GlobalComponents/ActionButtons";
import { InfoDivCard, ShoppingItemCard } from "./styles";

export default function ShoppingList() {
  const [fetchCalled, setFetchCalled] = useState<boolean>(false);

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
      {comicArrayInfo ? (
        <>
          <ShoppingItemCard>
            {comicArrayInfo.map((item) => {
              return (
                <section key={item.id}>
                  <img src={comicCoverImg(item)} alt={item.title} />
                  <InfoDivCard>
                    <h2>{item.title}</h2>
                    <ActionButtons item={item} />
                  </InfoDivCard>
                </section>
              );
            })}
          </ShoppingItemCard>
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

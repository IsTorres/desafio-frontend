import { useEffect, useState } from "react";
import useFetchArrayComics from "../../hooks/useFetchArrayComics";
import { comicCoverImg, myState } from "../../utils";
import ActionButtons from "../GlobalComponents/ActionButtons";
import { InfoDivCard, ShoppingItemCard } from "./styles";
import { ThreeCircles } from "react-loader-spinner";

export default function ShoppingList() {
  const { comicArrayInfo, getComicArray } = useFetchArrayComics();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      const formatedArray = myState.map((product) => String(product.id));
      getComicArray(formatedArray);
      setIsLoading(false);
    }
  }, [isLoading, getComicArray]);

  return (
    <>
      {isLoading ? (
        <div style={{ position: "absolute", left: "50%", top: "50%" }}>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#ff0000"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <ShoppingItemCard>
          {comicArrayInfo.map((item) => {
            // Verifica se o item está presente em myState e tem quantidade maior que zero
            const existsInMyState = myState.find(
              (el) => el.id === item.id && el.qtd > 0,
            );
            if (!existsInMyState) {
              return null;
            }
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
      )}
    </>
  );
}

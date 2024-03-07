import { ReactElement } from "react";
import { Comic } from "../types/Comic.type";

interface IComic {
  el: Comic;
}

export default function ComicListItem({ el }: IComic): ReactElement {
  return (
    <div>
      <li style={{ listStyle: "none" }} key={el.id}>
        <p>
          Título: {el.title} | Preço: {el.prices ? el.prices[0].price : 1}
        </p>
      </li>
    </div>
  );
}

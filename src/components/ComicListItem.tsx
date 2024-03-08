import { ReactElement } from "react";
import { Comic } from "../types/Comic.type";
import ImageComicItem from "./ImageComicItem";

interface IComic {
  el: Comic;
}

export default function ComicListItem({ el }: IComic): ReactElement {
  console.log(el);
  return (
    <div>
      <li style={{ listStyle: "none" }} key={el.id}>
        <ImageComicItem src={el.thumbnail} description={el.title} />
        <p>
          Título: {el.title} | Preço: {el.prices ? el.prices[0].price : 1}
        </p>
      </li>
    </div>
  );
}

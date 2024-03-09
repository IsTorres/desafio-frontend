import { Comic } from "../../types/Comic";

interface IComic {
  el: Comic;
}

export default function ComicListItem({ el }: IComic) {
  const imageUrl = `${el.thumbnail.path}.${el.thumbnail.extension}`;
  return (
    <div>
      <img src={imageUrl} alt={el.title} style={{ height: "250px" }} />
      <p>
        Título: {el.title} | Preço: {el.prices ? el.prices[0].price : 1}
      </p>
    </div>
  );
}

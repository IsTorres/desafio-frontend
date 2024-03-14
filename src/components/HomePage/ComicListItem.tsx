import { Comic } from "../../types/Comic";
import BuyButtonComponent from "../GlobalComponents/BuyButton";
import { ListItem } from "./styles";

interface IComic {
  el: Comic;
}

export default function ComicListItem({ el }: IComic) {
  const imageUrl = `${el.thumbnail.path}.${el.thumbnail.extension}`;
  return (
    <ListItem>
      <div className="card">
        <div className="card-cover">
          <a href={`/product/${el.id}`}>
            <img className="item" src={imageUrl} alt={el.title} />
            <h5 className="title">{el.title}</h5>
          </a>
          <p>U${el.prices ? el.prices[0].price : 1}</p>
        </div>
        <BuyButtonComponent id={el.id} />
      </div>
    </ListItem>
  );
}

import { Comic } from "../../types/Comic";
import BuyButtonComponent from "../GlobalComponents/BuyButton";
import { Title, Card, CardCover } from "./styles";

interface IComic {
  el: Comic;
}

export default function ComicListItem({ el }: IComic) {
  const imageUrl = `${el.thumbnail.path}.${el.thumbnail.extension}`;
  return (
    <Card>
      <CardCover>
        <a href={`/product/${el.id}`}>
          <img src={imageUrl} alt={el.title} />
          <Title>{el.title}</Title>
        </a>
        <p>U${el.prices ? el.prices[0].price : 1}</p>
      </CardCover>
      <BuyButtonComponent item={el} />
    </Card>
  );
}

import { Comic } from "../../types/Comic";
import BuyButtonComponent from "../GlobalComponents/BuyButton";
import { TitleContent } from "../GlobalComponents/styles";
import { ComicPage } from "./styles";

interface Props {
  comic: Comic;
}

export default function SpecificComic({ comic }: Props) {
  if (!comic) return null;

  const comicCoverImg = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <ComicPage>
      <TitleContent>{comic.title}</TitleContent>
      <div className="container">
        <div className="box">
          <img src={comicCoverImg} alt={comic.title} />
          <div className="content">
            <h2>Description:</h2>
            <p>{comic.description || "No description available"}</p>
            <h2>Creators:</h2>
            <div className="creators">
              {comic.creators.items.map(
                (creator: { name: string; role: string }) => (
                  <div className="creators-info" key={creator.name}>
                    <h5>{creator.name}</h5>
                    <h5>{creator.role}</h5>
                  </div>
                )
              )}
            </div>
            <BuyButtonComponent />
          </div>
        </div>
      </div>
    </ComicPage>
  );
}

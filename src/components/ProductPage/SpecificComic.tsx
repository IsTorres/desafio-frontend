import { Comic } from "../../types/Comic";
import { addSpaces } from "../../utils";
import BuyButtonComponent from "../GlobalComponents/BuyButton";
import { TitleContent } from "../GlobalComponents/styles";
import {
  ComicPage,
  Container,
  Content,
  Box,
  Creators,
  CreatorsInfo,
} from "./styles";

interface Props {
  comic: Comic;
}

export default function SpecificComic({ comic }: Props) {
  if (!comic) return null;

  const comicCoverImg = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <ComicPage>
      <TitleContent>{comic.title}</TitleContent>
      <Container>
        <Box>
          <img src={comicCoverImg} alt={comic.title} />
          <Content>
            <div>
              <h2>Description:</h2>
              <p>{comic.description || "No description available"}</p>
            </div>
            <div>
              <h2>Creators:</h2>
              <Creators>
                {comic.creators.items.map(
                  (creator: { name: string; role: string }) => (
                    <CreatorsInfo key={creator.name}>
                      <h5>{creator.name}</h5>
                      <p>{creator.role}</p>
                    </CreatorsInfo>
                  )
                )}
              </Creators>
            </div>
            <div>
              <h2>Prices</h2>
              {comic.prices.map(({ price, type }) => {
                return (
                  <p key={price + type}>
                    {addSpaces(type).toLowerCase()}: {price}
                  </p>
                );
              })}
            </div>
            <BuyButtonComponent />
          </Content>
        </Box>
      </Container>
    </ComicPage>
  );
}

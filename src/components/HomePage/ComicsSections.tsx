import React, { useRef } from "react";
import { ComicsPeriodes } from "../../types/Comic";
import ComicListItem from "./ComicListItem";
import {
  ComicSections,
  Pagination,
  Container,
  Carousel,
  BtnCarouselNext,
  BtnCarousel,
} from "./styles";
import arrowIcon from "../../assets/arrowIcon.png";
import { TitleContent } from "../GlobalComponents/styles";
import { addSpaces } from "../../utils";
import { ThreeCircles } from "react-loader-spinner";

interface IComicsList {
  data: ComicsPeriodes;
}

const ComicsSections = ({ data }: IComicsList) => {
  const carouselRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const sections = Object.entries(data).map(([sectionName, comics], index) => {
    const carouselRef =
      carouselRefs.current[index] || React.createRef<HTMLDivElement>();
    carouselRefs.current[index] = carouselRef;

    const handleRightClick = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left:
            carouselRef.current.scrollLeft + carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    };

    const handleLeftClick = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left:
            carouselRef.current.scrollLeft - carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    };

    return (
      <div key={sectionName}>
        <TitleContent>{addSpaces(sectionName)}</TitleContent>
        <ComicSections>
          <BtnCarousel onClick={handleLeftClick}>
            <img src={arrowIcon} />
          </BtnCarousel>
          <Container>
            <Carousel ref={carouselRef}>
              {comics.map((el) => (
                <div key={el.id}>
                  <ComicListItem el={el} />
                </div>
              ))}
            </Carousel>
          </Container>
          <BtnCarouselNext onClick={handleRightClick}>
            <img src={arrowIcon} />
          </BtnCarouselNext>
        </ComicSections>
      </div>
    );
  });

  return (
    <Pagination>
      {data ? (
        <>{sections}</>
      ) : (
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
      )}
    </Pagination>
  );
};

export default ComicsSections;

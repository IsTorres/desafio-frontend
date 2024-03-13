import React, { useRef } from "react";
import { ComicsPeriodes } from "../../types/Comic";
import ComicListItem from "./ComicListItem";
import { ComicSections, PaginationDiv } from "./styles";
import arrowIcon from "../../assets/arrowIcon.png";
import { TitleContent } from "../GlobalComponents/styles";
import { addSpaces } from "../../utils";

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
      <ComicSections key={sectionName}>
        <TitleContent className="module-header">
          {addSpaces(sectionName)}
        </TitleContent>
        <div className="section">
          <button className="btn-carousel -prev" onClick={handleLeftClick}>
            <img src={arrowIcon} />
          </button>
          <div className="container">
            <div className="carousel" ref={carouselRef}>
              {comics.map((el) => (
                <div key={el.id}>
                  <ComicListItem el={el} />
                </div>
              ))}
            </div>
          </div>
          <button className="btn-carousel -next" onClick={handleRightClick}>
            <img src={arrowIcon} />
          </button>
        </div>
      </ComicSections>
    );
  });

  return (
    <PaginationDiv className="pagination">
      {data ? <>{sections}</> : <p>Loading</p>}
    </PaginationDiv>
  );
};

export default ComicsSections;

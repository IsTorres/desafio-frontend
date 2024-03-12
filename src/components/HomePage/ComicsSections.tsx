import React, { useRef } from "react";
import { ComicsPeriodes } from "../../types/Comic";
import ComicListItem from "./ComicListItem";
import { PaginationDiv } from "./styles";

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
      <section key={sectionName}>
        <h2>{sectionName}</h2>
        <div style={{ display: "flex" }}>
          <button
            className="btn-carousel -prev"
            onClick={handleLeftClick}
          ></button>
          <div className="container">
            <div className="carousel" ref={carouselRef}>
              {comics.map((el) => (
                <div key={el.id}>
                  <ComicListItem el={el} />
                </div>
              ))}
            </div>
          </div>
          <button
            className="btn-carousel -next"
            onClick={handleRightClick}
          ></button>
        </div>
      </section>
    );
  });

  return (
    <PaginationDiv>
      {data ? <div className="pagination">{sections}</div> : <p>Loading</p>}
    </PaginationDiv>
  );
};

export default ComicsSections;

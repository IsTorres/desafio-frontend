import { MouseEvent, useRef, useState } from "react";
import { ComicsList } from "../../types/Comic";
import ComicListItem from "./ComicListItem";
import { PaginationDiv } from "./styles";

interface IComicsList {
  data: ComicsList;
}

const Pagination = ({ data }: IComicsList) => {
  const [items] = useState([...data]);
  const [currentPage] = useState(1);
  const itemsPerPage = 20;

  const carousel = useRef<HTMLDivElement>(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((item) => (
    <div key={item.id}>
      <ComicListItem el={item} />
    </div>
  ));

  const handleRightClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const { current } = carousel;
    if (current) {
      current.scrollTo({
        left: current.scrollLeft + current.offsetWidth,
      });
    }
  };

  const handleLeftClick = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault();
    const { current } = carousel;
    if (current) {
      current.scrollTo({
        left: current.scrollLeft - current.offsetWidth,
      });
    }
  };

  return (
    <PaginationDiv>
      {data ? (
        <div className="pagination">
          <button
            className="btn-carousel -prev"
            onClick={(e) => handleLeftClick(e)}
          />
          <div className="container">
            <div className="carousel" ref={carousel}>
              {renderItems}
            </div>
          </div>
          <button
            className="btn-carousel -next"
            onClick={(e) => handleRightClick(e)}
          />
        </div>
      ) : (
        <p>Loading</p>
      )}
    </PaginationDiv>
  );
};

export default Pagination;

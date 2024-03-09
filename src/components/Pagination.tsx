import { useState } from "react";
import { ComicsList } from "../types/Comic";
import ComicListItem from "./ComicListItem";

interface IComicsList {
  data: ComicsList;
}

const Pagination = ({ data }: IComicsList) => {
  const [todos] = useState([...data]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const renderTodos = currentTodos.map((todo) => (
    <li key={todo.id} style={{ listStyle: "none" }}>
      <ComicListItem el={todo} />
    </li>
  ));

  const pageDots = Array.from(
    { length: Math.ceil(todos.length / todosPerPage) },
    (_, index) => (
      <span
        key={index}
        onClick={() => handleClick(index + 1)}
        style={{
          cursor: "pointer",
          margin: "0 5px",
          textDecoration: currentPage === index + 1 ? "underline" : "none",
        }}
      >
        O
      </span>
    )
  );

  return (
    <div>
      {data ? (
        <>
          <ul>{renderTodos}</ul>
          <div>
            <button
              onClick={() => handleClick(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {pageDots}
            <button
              onClick={() =>
                handleClick(
                  Math.min(
                    Math.ceil(todos.length / todosPerPage),
                    currentPage + 1
                  )
                )
              }
              disabled={currentPage === Math.ceil(todos.length / todosPerPage)}
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Pagination;

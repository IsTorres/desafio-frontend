import React, { useEffect, useState } from "react";
import { fetchAPI } from "../service";
import ComicListItem from "./ComicListItem";
import { ComicsList, Comic } from "../types/Comic.type";

export default function ComicsList() {
  const [comics, setComics] = useState<ComicsList>([]);

  const load = async () => {
    setComics(await fetchAPI());
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div>
      <ul>
        {comics.map((el: Comic) => {
          return <ComicListItem el={el} />;
        })}
      </ul>
    </div>
  );
}

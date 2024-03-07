import React, { useEffect, useState } from "react";
import { fetchAPI } from "../service";

type Comic = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

type ComicsList = Comic[];

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
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

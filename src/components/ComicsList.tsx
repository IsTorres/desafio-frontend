import { useEffect, useState } from "react";
import { fetchComicsWithParams } from "../service";
import ComicListItem from "./ComicListItem";
import { ComicsList, Comic } from "../types/Comic";
import { DateDescriptor } from "../utils";

export default function ComicsList() {
  const [comics, setComics] = useState<ComicsList>([]);
  const [descriptor, setDescriptor] = useState<string>("thisWeek");

  const load = async () => {
    setComics(await fetchComicsWithParams(descriptor));
  };
  useEffect(() => {
    load();
  }, [descriptor]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDescriptor(event.target.value);
  };

  return (
    <div>
      <select value={descriptor} onChange={handleSelect}>
        {Object.keys(DateDescriptor).map((key) => {
          return (
            <option key={key} value={key}>
              {DateDescriptor[key] as keyof typeof DateDescriptor}
            </option>
          );
        })}
      </select>
      <ul>
        {comics.length > 1 ? (
          comics.map((el: Comic) => {
            return (
              <li key={el.id} style={{ listStyle: "none" }}>
                <ComicListItem el={el} />
              </li>
            );
          })
        ) : (
          <div>
            <p>Loading</p>
          </div>
        )}
      </ul>
    </div>
  );
}

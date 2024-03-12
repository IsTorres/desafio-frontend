import { useEffect, useState } from "react";
import { fetchComicsWithParams } from "../../service";
import { Comic, ComicsList } from "../../types/Comic";
import { DateDescriptor } from "../../utils";
import Pagination from "./Pagination";
import { ComicList } from "./styles";

export default function ComicsList() {
  const [comics, setComics] = useState<Comic[]>([]);
  const [descriptor, setDescriptor] = useState<string>("thisWeek");
  const [loading, setLoading] = useState<boolean>(true);

  const load = async () => {
    setLoading(true);
    try {
      const comicsData = await fetchComicsWithParams(descriptor);
      setComics(comicsData);
    } catch (error) {
      console.error("Error loading comics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [descriptor]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDescriptor(event.target.value);
  };

  return (
    <ComicList>
      <select className="select" value={descriptor} onChange={handleSelect}>
        {Object.keys(DateDescriptor).map((key) => {
          return (
            <option key={key} value={key}>
              {DateDescriptor[key as keyof typeof DateDescriptor]}
            </option>
          );
        })}
      </select>
      {loading ? (
        <p>Loading...</p>
      ) : comics.length ? (
        <Pagination data={comics} />
      ) : (
        <p>No comics found.</p>
      )}
    </ComicList>
  );
}

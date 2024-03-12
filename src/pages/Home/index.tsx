import { useEffect, useState } from "react";
import { fetchComicsWithParams } from "../../service";
import { ComicsPeriodes } from "../../types/Comic";
import ComicsSections from "../../components/HomePage/ComicsSections";
import { ComicList } from "../../components/HomePage/styles";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [comics, setComics] = useState<ComicsPeriodes>();

  const fetchComics = async () => {
    const newDateDescriptor: (keyof ComicsPeriodes)[] = [
      "thisWeek",
      "nextWeek",
      "lastWeek",
      "thisMonth",
    ];
    setLoading(true);
    try {
      const comicsData = await Promise.all(
        newDateDescriptor.map((descriptor) => fetchComicsWithParams(descriptor))
      );
      const comicsObject: ComicsPeriodes = newDateDescriptor.reduce(
        (acc, descriptor, index) => {
          acc[descriptor] = comicsData[index];
          return acc;
        },
        {} as ComicsPeriodes
      );
      setComics(comicsObject);
    } catch (error) {
      console.error("Error loading comics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <ComicList>
      {loading ? (
        <p>Loading...</p>
      ) : comics ? (
        <>
          <h2>Comics</h2>
          <ComicsSections data={comics} />
        </>
      ) : (
        <p>No comics found.</p>
      )}
    </ComicList>
  );
}

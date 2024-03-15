import { useState } from "react";
import { fetchComicsWithParams } from "../service";
import { ComicsPeriodes } from "../types/Comic";

export default function useFetchComics() {
  const [loading, setLoading] = useState(false);
  const [comics, setComics] = useState<ComicsPeriodes>({
    thisWeek: [],
    nextWeek: [],
    lastWeek: [],
    thisMonth: [],
  });

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

  return { loading, comics, fetchComics };
}

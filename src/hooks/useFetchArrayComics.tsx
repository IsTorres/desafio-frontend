import { useState } from "react";
import { fetchSpecificComicById } from "../service";
import { Comic } from "../types/Comic";

export const useFetchArrayComics = () => {
  const [comicArrayInfo, setComicArrayInfo] = useState<Comic[]>([]);

  const getComicArray = async (idArray: string[]) => {
    try {
      const promises: Promise<Comic>[] = idArray.map(async (id) => {
        return await fetchSpecificComicById(id);
      });

      const comics = await Promise.all(promises);
      setComicArrayInfo(comics);
    } catch (error) {
      console.error("Erro ao buscar quadrinhos:", error);
    }
  };

  return { comicArrayInfo, getComicArray };
};

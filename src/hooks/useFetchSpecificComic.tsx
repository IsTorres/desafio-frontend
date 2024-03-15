import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSpecificComicById } from "../service";
import { Comic } from "../types/Comic";

export const useFetchSpecificComic = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [comicInfo, setComicInfo] = useState<Comic>();

  const getComic = async (id: string) => {
    setLoading(true);
    try {
      const comicData: Comic = await fetchSpecificComicById(id);
      setComicInfo(comicData);
    } catch (error) {
      console.error("Comic not found", error);
    } finally {
      setLoading(false);
    }
  };

  return { id, loading, comicInfo, getComic };
};

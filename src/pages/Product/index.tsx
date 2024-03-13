import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecificComic from "../../components/ProductPage/SpecificComic";
import { fetchSpecificComicById } from "../../service";
import { Comic } from "../../types/Comic";

export default function Product() {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [comicInfo, setComicInfo] = useState<Comic>();

  const getComic = async (id: string) => {
    setLoading(true);
    try {
      const [comicData] = await fetchSpecificComicById(id);
      console.log(comicData);
      setComicInfo(comicData);
    } catch (error) {
      console.error("Comic not found", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getComic(id);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : comicInfo ? (
        <SpecificComic comic={comicInfo} />
      ) : (
        <p>No comics found.</p>
      )}
    </div>
  );
}

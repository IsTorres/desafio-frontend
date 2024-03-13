import { useEffect } from "react";
import SpecificComic from "../../components/ProductPage/SpecificComic";
import useFetchSpecificComic from "../../hooks/useFetchSpecificComic";

export default function Product() {
  const { id, loading, getComic, comicInfo } = useFetchSpecificComic();

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

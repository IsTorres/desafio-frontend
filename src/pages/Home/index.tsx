import { useEffect } from "react";
import Apresentation from "../../components/HomePage/Apresentation";
import ComicsSections from "../../components/HomePage/ComicsSections";
import { ComicList } from "../../components/HomePage/styles";
import { useFetchComics } from "../../hooks/useFetchComics";

export default function Home() {
  const { loading, comics, fetchComics } = useFetchComics();

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <ComicList>
      {loading ? (
        <p>Loading...</p>
      ) : comics ? (
        <>
          <Apresentation />
          <ComicsSections data={comics} />
        </>
      ) : (
        <p>No comics found.</p>
      )}
    </ComicList>
  );
}

import { useEffect } from "react";
import Apresentation from "../../components/HomePage/Apresentation";
import ComicsSections from "../../components/HomePage/ComicsSections";
import { ComicList } from "../../components/HomePage/styles";
import { useFetchComics } from "../../hooks/useFetchComics";
import { ThreeCircles } from "react-loader-spinner";

export default function Home() {
  const { loading, comics, fetchComics } = useFetchComics();

  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <ComicList>
      {loading ? (
        <div style={{ position: "absolute", left: "50%", top: "50%" }}>
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#ff0000"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
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

import { useEffect } from "react";
import SpecificComic from "../../components/ProductPage/SpecificComic";
import { useFetchSpecificComic } from "../../hooks/useFetchSpecificComic";
import { ThreeCircles } from "react-loader-spinner";

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
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#ff0000"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : comicInfo ? (
        <SpecificComic comic={comicInfo} />
      ) : (
        <p>No comics found.</p>
      )}
    </div>
  );
}

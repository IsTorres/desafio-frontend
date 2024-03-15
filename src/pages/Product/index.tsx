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
      ) : comicInfo ? (
        <SpecificComic comic={comicInfo} />
      ) : (
        <p>No comics found.</p>
      )}
    </div>
  );
}

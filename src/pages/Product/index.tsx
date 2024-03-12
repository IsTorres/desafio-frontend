import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { useParams } from "react-router-dom";
import Menu from "../../components/GlobalComponents/Menu";

export default function Product() {
  const { id } = useParams();
  // fetchSpecificComicById();
  return (
    <>
      <Menu />
      {/* <SpecificComic id={} /> */}
      <div>{id}</div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>
);

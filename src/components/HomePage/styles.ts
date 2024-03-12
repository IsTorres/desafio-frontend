import styled from "styled-components";
import arrowIcon from "../../assets/arrowIcon.png";

export const PaginationDiv = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .container {
    max-width: 75vw;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    overflow: hidden;
  }

  .container .carousel {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .btn-carousel {
    background-color: #242424;
    background-repeat: no-repeat;
    background-position: center;
    padding: 45px 35px;
  }

  .-next {
    background-image: url(${arrowIcon});
  }
  .-prev {
    background-image: url(${arrowIcon});
    transform: scaleX(-1);
  }

  .btn-carousel.-next:hover,
  .btn-carousel.-prev:hover {
    background-color: #fff;
    transition: 0.5s;
    border-color: #242424;
  }

  @media (max-width: 768px) {
    .btn-carousel {
      display: none;
    }

    li {
      list-style: none;
      width: 35%;
      padding: 0 15px;
    }
  }
`;

export const ComicList = styled.div`
  .select {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const ListItem = styled.div`
  .title {
    text-align: left;
    color: #fff;
    font:
      800 15px / 1.2 "Roboto Bold",
      "Trebuchet MS",
      Helvetica,
      Arial,
      sans-serif;
    margin: auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 215px;
    margin: 10px;
    padding: 10px;
  }

  .card .card-cover {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 460px;
  }

  .card .card-cover img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .card .card-cover p {
    margin: 0px 10px;
    font-family: fantasy;
    font-size: x-large;
  }

  .card .card-info {
    display: flex;
    justify-content: space-between;
  }

  .card .card-info button {
    padding: 0.6em 1em;
  }

  .card .card-info button {
    border: none;
  }

  .card .card-info .buy-button {
    background-color: #ff0000;
  }

  .card .card-info .buy-button p {
    font:
      normal 13px / 1.2 "Roboto",
      "Trebuchet MS",
      Helvetica,
      Arial,
      sans-serif;
    letter-spacing: 0;
    text-align: left;
    color: #fff;
  }

  /* @media (max-width: 768px) {
  } */
`;

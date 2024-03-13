import styled from "styled-components";

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
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    padding: 45px 35px;
    border: transparent;
  }

  .-prev {
    transform: scaleX(-1);
  }

  .-prev:hover img,
  .-next:hover img {
    transition: 1s;
    width: 120%;
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

export const ComicSections = styled.section`
  .section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const ComicList = styled.div`
  width: fit-content;
  margin: auto;
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
    border: none;
  }

  /* @media (max-width: 768px) {
  } */
`;

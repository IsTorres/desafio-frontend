import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const Container = styled.div`
  max-width: 75vw;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  overflow: hidden;
`;
export const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;
// export const PaginationDiv = styled.div`
// .btn-carousel {
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-position: center;
//   padding: 45px 35px;
//   border: transparent;
// }`

export const BtnCarousel = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  padding: 45px 35px;
  border: transparent;
  transform: scaleX(-1);

  :hover {
    transition: 1s;
    width: 120%;
  }

  @media (max-width: 768px) {
    display: none;
  }

  li {
    list-style: none;
    width: 35%;
    padding: 0 15px;
  }
`;
export const BtnCarouselNext = styled(BtnCarousel)`
  transform: none;
`;

export const ComicSections = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ComicList = styled.div`
  width: fit-content;
  margin: auto;
`;

export const Title = styled.h5`
  text-align: left;
  color: #242424;
  font:
    800 15px / 1.2 "Roboto Bold",
    "Trebuchet MS",
    Helvetica,
    Arial,
    sans-serif;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.7s;

  :hover {
    color: red;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 215px;
  margin: 10px;
  padding: 10px;
`;
export const CardCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0 26px 24px -16px rgba(0, 0, 0, 0.4);
    transition: all 0.17s ease-in-out;
  }

  img:hover {
    margin-top: -10px;
  }

  p {
    margin-top: 10px;
    margin: 0px 10px;
    font-family: fantasy;
    font-size: x-large;
  }
`;
export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
  }

  /* @media (max-width: 768px) {
  } */
`;

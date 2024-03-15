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

  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;
export const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;

export const Box = styled.div`
  display: flex;
  padding: 5%;
  justify-content: center;
  background-color: rgb(0 0 0 / 60%);
  backdrop-filter: blur(6px);

  img {
    height: 100%;
    box-shadow: 2px 5px 10px 5px rgb(0 0 0 / 60%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ApresentationDiv = styled.div`
  min-height: 435px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    /* width: 100%; */
    color: #c6a972;
    font-family: "league gothic";
    font-weight: bolder;
    text-transform: uppercase;
    font-size: 8.2em;
    line-height: 1.1;
    /* background: rgb(0 0 0 / 60%); */
    padding: 5% 25%;
    /* backdrop-filter: blur(5px); */
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4.2em;
      padding: 14% 30%;
    }
  }
`;

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
  /* width: fit-content; */
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
    margin: 0px 10px;
    font-family: "Roboto";
    font-weight: 900;
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

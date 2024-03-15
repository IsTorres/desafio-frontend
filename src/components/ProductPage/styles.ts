import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Box = styled.div`
  display: flex;
  padding: 5%;
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

export const Content = styled.div`
  text-align: justify;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 3%;
  h2 {
    margin-bottom: 0px;
  }

  p {
    text-align: left;
  }
`;

export const Creators = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CreatorsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px 10px 0;
  align-items: flex-start;

  h5 {
    margin: 0;
  }
`;

export const ComicPage = styled.div`
  h1 {
    margin: 5%;
  }
`;

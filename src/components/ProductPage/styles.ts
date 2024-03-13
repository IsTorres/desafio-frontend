import { styled } from "styled-components";
import R from "../../assets/R.png";

export const ComicPage = styled.div`
  h1 {
    margin: 5%;
  }
  .container {
    /* The image used */
    background-image: url(${R});

    /* Set a specific height */
    min-height: 500px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container .box {
    display: flex;
    padding: 5%;
    background-color: rgb(0 0 0 / 60%);
    backdrop-filter: blur(6px);
  }

  .container .box img {
    height: 100%;
  }

  .container .box .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 3%;
  }
  .container .box .content h2 {
    margin-bottom: 0px;
  }

  .container .box .content p {
    text-align: left;
  }

  .container .box .content .creators {
    display: flex;
    flex-wrap: wrap;
  }

  .container .box .content .creators .creators-info {
    display: flex;
    flex-direction: column;
    margin: 10px 20px 10px 0;
    align-items: flex-start;
  }
  .container .box .content .creators .creators-info h5 {
    margin: 0;
  }

  @media (max-width: 768px) {
    .container .box {
      flex-direction: column;
    }
  }
`;

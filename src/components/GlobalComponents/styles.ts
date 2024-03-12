import styled from "styled-components";

export const NavMenu = styled.div`
  .navigation {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #242424;
    box-shadow: 0px 10px 10px #000000a1;
  }

  .nav-itens {
    width: 10%;
  }

  @media (max-width: 768px) {
    .nav-itens {
      width: 50%;
    }
  }
`;

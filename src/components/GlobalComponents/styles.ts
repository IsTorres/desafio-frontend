import styled from "styled-components";

export const Logo = styled.div`
  a img {
    padding: 0 5%;
    width: 10%;
    &:before {
      background-color: #c6a972;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      transform: rotate(-45deg) skewX(45deg);
      width: 20px;
      left: 49%;
      top: -5px;
      transform-origin: left bottom;
    }
  }
`;

export const Cart = styled.div`
  position: absolute;
  right: 5%;
  top: 30%;
  font-size: xxx-large;
  padding: 0;

  a {
    color: yellow;
  }
  @media (max-width: 768px) {
    right: 5%;
  }
`;

export const CountDot = styled.div`
  color: white;
  font-size: 15px;
  position: absolute;
  bottom: 15%;
  right: -10%;
  background: red;
  padding: 0px 8px;
  border-radius: 20px;
`;

export const NavMenu = styled.nav`
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #242424;

  /* .nav-itens {
    padding: 2% 0;
  } */
`;

export const TitleContent = styled.h1`
  /* Estilos diretamente aplicados ao componente TitleContent */
  font-family: fantasy, sans-serif;
  position: relative;
  margin-left: 0 !important;
  margin-top: 45px !important;
  margin-bottom: 25px !important;
  text-transform: uppercase;

  /* Estilos para o pseudoelemento ::before */
  &::before {
    background-color: #c6a972;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    transform: rotate(-45deg) skewX(45deg);
    width: 20px;
    left: 49%;
    top: -5px;
    transform-origin: left bottom;
  }

  /* Estilos para o pseudoelemento ::after */
  &::after {
    background-color: #c6a972;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    transform: rotate(-45deg) skewX(45deg);
    width: 20px;
    left: 43%;
    top: calc(100% + 3px);
    transform-origin: right top;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const BuyButton = styled.button`
  background-color: #ff0000;

  p {
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
`;

export const ActionButtons = styled.button`
  background-color: transparent;
  font-size: x-large;
  padding: 0 10px;
`;

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
  width: 40px;
  height: 35px;
  position: absolute;
  right: 5%;
  top: 30%;
  font-size: 25px;
  padding-top: 5px;
  border-radius: 30px;
  background: yellow;

  a {
    color: #242424;
  }
  @media (max-width: 768px) {
    right: 5%;
  }
`;

export const CountDot = styled.div`
  color: #242424;
  font-weight: 900;
  font-size: 12px;
  position: absolute;
  bottom: -10%;
  right: -10%;
  background: white;
  padding: 0px 6px;
  border: 1px #242424 solid;
  border-radius: 20px;
`;

export const NavMenu = styled.nav`
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #242424;
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

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BuyBtn = styled.button`
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

export const ActionBtn = styled.button`
  background-color: #242424;
  font-size: larger;
  padding: 6px 8px 3px;
  border-radius: 40px;
  margin: 10px;
`;

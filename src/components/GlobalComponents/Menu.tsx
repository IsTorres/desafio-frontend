import MarvelComicsIcon from "../../../public/MarvelComicsIcon.png";
import { FaShoppingCart } from "react-icons/fa";
import { Cart, CountDot, Logo, NavMenu } from "./styles";

export default function Menu() {
  return (
    <NavMenu>
      <Logo>
        <a href="/">
          <img src={MarvelComicsIcon} alt="logo marvel comics" />
        </a>
      </Logo>
      <Cart>
        <CountDot>0</CountDot>
        <a href="/shopping-cart/">
          <FaShoppingCart width={"3em"} height={"3em "} />
        </a>
      </Cart>
    </NavMenu>
  );
}

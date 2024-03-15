import MarvelComicsIcon from "../../../public/MarvelComicsIcon.png";
import { FaShoppingCart } from "react-icons/fa";
import { Cart, CountDot, Logo, NavMenu } from "./styles";
import { useContext } from "react";
import { AppContext } from "../../contexts/GlobalContext";

export default function Menu() {
  const { sumQtd } = useContext(AppContext);
  return (
    <NavMenu>
      <Logo>
        <a href="/">
          <img src={MarvelComicsIcon} alt="logo marvel comics" />
        </a>
      </Logo>
      <Cart>
        <CountDot>{sumQtd()}</CountDot>
        <a href="/shopping-cart/">
          <FaShoppingCart width={"3em"} height={"3em "} />
        </a>
      </Cart>
    </NavMenu>
  );
}

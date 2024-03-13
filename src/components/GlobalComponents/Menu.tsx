import MarvelComicsIcon from "../../../public/MarvelComicsIcon.png";
import { FaShoppingCart } from "react-icons/fa";

import { NavMenu } from "./styles";
export default function Menu() {
  return (
    <NavMenu>
      <nav className="navigation">
        <div className="nav-itens logo  ">
          <a href="/">
            <img src={MarvelComicsIcon} alt="logo marvel comics" />
          </a>
        </div>
        <div className="nav-itens cart">
          <span className="buy-count-dot">0</span>
          <a href="/shopping-cart/">
            <FaShoppingCart width={"3em"} height={"3em "} />
          </a>
        </div>
      </nav>
    </NavMenu>
  );
}

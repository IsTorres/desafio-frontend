import MarvelComicsIcon from "../../../public/MarvelComicsIcon.png";
import MarvelLogo from "../../../public/MarvelLogo.png";

import { NavMenu } from "./styles";
export default function Menu() {
  return (
    <NavMenu>
      <nav className="navigation">
        <div className="nav-itens">
          <a href="/">
            <img src={MarvelComicsIcon} alt="logo marvel comics" />
          </a>
        </div>
        <div className="nav-itens">
          <a href="/pages/shopping-cart/">ShoppingCart</a>
        </div>
      </nav>
    </NavMenu>
  );
}

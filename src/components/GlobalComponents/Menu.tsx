import MarvelComicsIcon from "../../../public/MarvelComicsIcon.png";
export default function Menu() {
  return (
    <div>
      <nav style={{ display: "flex" }}>
        <div>
          <a href="/">
            <img src={MarvelComicsIcon} />
          </a>
        </div>
        <div>
          <a href="/pages/shopping-cart/">ShoppingCart</a>
        </div>
      </nav>
    </div>
  );
}

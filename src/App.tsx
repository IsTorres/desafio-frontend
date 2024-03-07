import { useEffect, useState } from "react";
import "./App.css";
import { fetchAPI } from "./service";

function App() {
  const [comics, setComics] = useState([]);

  const load = async () => {
    setComics(await fetchAPI());
  };
  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <a href="/pages/product/">Products</a>
        </li>
        <li>
          <a href="/pages/shopping-cart/">ShoppingCart</a>
        </li>
        <button
          onClick={() => {
            console.log(comics);
          }}
        >
          click
        </button>
      </ul>
    </div>
  );
}

export default App;

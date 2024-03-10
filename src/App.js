import { useState } from "react";
import { useEffect } from "react";
import Products from "./Products";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="navigation">
            <div className="logo">Sushi House</div>
            <div className="cart">View Cart</div>
          </div>
          <img src="images/bg.jpg" alt="Sushi House" title="Sushi House" />
          <div className="description">
            <h1>Welcome to our sushi house</h1>
            <p>
              Welcome to Zen Sushi Bar, where every bite is a journey into the
              delicate art of Japanese culinary perfection.
            </p>
          </div>
        </div>

        <div className="main">
          <Products products={products} />
        </div>
      </div>
      <div className="footer">all rights reserved &copy;</div>
    </>
  );
}

export default App;

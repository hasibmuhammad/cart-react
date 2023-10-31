import { useEffect, useState } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
import Cart from "./components/Cart/Cart";
import { addToLs, getCartFromLs, removeFromCart } from "./utils";

function App() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => {
        setBottles(data);
        setCart(getCartFromLs());
      });
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    addToLs([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    const remainingCart = cart.filter((c) => c.id !== item.id);
    setCart(remainingCart);
  };

  return (
    <div className="container">
      <Bottles bottles={bottles} handleAddToCart={handleAddToCart} />
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default App;

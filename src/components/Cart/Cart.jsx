import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      let sum = 0;
      cart.forEach((c) => (sum += c.price));

      setTotal(sum);
    }
  }, [cart]);
  return (
    <>
      {cart.length > 0 && (
        <div className="cart">
          <h4>Total Cart Item - {cart.length}</h4>
          <hr />
          <ul>
            {cart.map((c) => (
              <li key={c.id} className="cart-item">
                <img className="cart-img" src={c.img} alt="" />
                <p className="product-name">
                  {c.name.substr(0, 22)} - ${c.price}
                </p>
                <button
                  className="remove"
                  onClick={() => handleRemoveFromCart(c)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <h4>Total: ${total}</h4>
        </div>
      )}
    </>
  );
};

export default Cart;

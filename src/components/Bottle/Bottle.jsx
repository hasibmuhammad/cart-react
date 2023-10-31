import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  return (
    <div className="bottle">
      <img src={bottle.img} alt={bottle.name} />
      <h5>
        {bottle.name} - ${bottle.price}
      </h5>
      <div className="badges">
        <button className="badge">{bottle.category}</button>
        <button className="badge">{bottle.seller}</button>
      </div>
      <button className="cart-btn" onClick={() => handleAddToCart(bottle)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Bottle;

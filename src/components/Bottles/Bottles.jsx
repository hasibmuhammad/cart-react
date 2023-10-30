import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
const Bottles = ({ bottles, handleAddToCart }) => {
  return (
    <>
      <h1>Get Water Bottle</h1>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Bottles;

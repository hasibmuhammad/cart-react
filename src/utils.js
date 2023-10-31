const getCartFromLs = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const addToLs = (item) => {
  localStorage.setItem("cart", JSON.stringify(item));
};

const removeFromCart = (id) => {
  const cart = getCartFromLs();
  const remainingCart = cart.filter((c) => c.id !== id);
  addToLs(remainingCart);
};
export { addToLs, getCartFromLs, removeFromCart };

export const calculateTotalItemQty = (cartItems) => {
  return cartItems.reduce((totalQty, item) => totalQty += item.qty, 0);
}

export const calculateTotalPrice = (cartItems) => {
  const total = cartItems.reduce((total, {qty, product: {price}}) => {
    return (total += Number(price) * qty);
  }, 0);

  return total.toFixed(2);
};
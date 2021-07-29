export const addToCart = (cartItems, product) => {
  const indexOfItemInCart = cartItems.findIndex(({product: {id}}) => id === product.id);
  
  if (indexOfItemInCart > -1) {
    return incrementQuantity(cartItems, indexOfItemInCart);
  }

  return [...cartItems, {product, qty: 1}];
}

export const incrementQuantity = (cartItems, itemIndex) => {
  const itemInCart = cartItems[itemIndex];
  const tmp = [...cartItems];
  
  tmp.splice(itemIndex, 1, {product: itemInCart.product, qty: itemInCart.qty + 1});
  
  return tmp;
};

export const decrementQuantity = (cartItems, itemIndex) => {
  const itemInCart = cartItems[itemIndex];
  const tmp = [...cartItems];
  
  if (itemInCart.qty > 1) {
    tmp.splice(itemIndex, 1, {product: itemInCart.product, qty: itemInCart.qty - 1});
  } else {
    tmp.splice(itemIndex, 1);
  }
  
  return tmp;
};
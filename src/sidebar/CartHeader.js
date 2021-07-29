import { useCart } from "../cartContext";

const calculateItemQty = (cartItems) => {
  return cartItems.reduce((totalQty, item) => totalQty += item.qty, 0);
}

export const CartHeader = ({items}) => {
  return <h3>Shopping cart ({calculateItemQty(items)})</h3>;
}

import { Cart } from "./Cart";
import { useCart } from "../cartContext";
import { CartHeader } from "./CartHeader";

import "./Sidebar.css";

export const Sidebar = () => {
  const cartItems = useCart();

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <CartHeader items={cartItems} />
      </div>
      {!!cartItems.length && <Cart items={cartItems} />}
      {!cartItems.length && <div>Your cart is empty</div>}
    </div>
  );
};

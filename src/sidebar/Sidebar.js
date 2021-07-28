import { Cart } from "./Cart";
import { CartTotal } from "./CartTotal";
import { useCart } from "../cartContext";
import { CartEmpty } from "./CartEmpty";

import "./Sidebar.css";

export const Sidebar = () => {
  const cartItems = useCart();

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Shopping cart ({cartItems.length})</h3>
      </div>
      {!!cartItems.length && (
        <>
          <Cart />
          <CartTotal />
        </>
      )}
      {!cartItems.length && <CartEmpty/>}
    </div>
  );
};

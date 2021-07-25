import { Cart } from './Cart';
import { CartTotal } from './CartTotal';
import { useCart } from '../cartContext';


import './Sidebar.css';

export const Sidebar = () => {
  const cartProducts = useCart();
  
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h3>Shopping cart ({cartProducts.length})</h3>
      </div>
      <>
      <Cart/>
      <CartTotal/>
      </>
    </div>
  );
};

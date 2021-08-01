import { calculateTotalItemQty } from "./cartUtils";

export const CartHeader = ({items}) => {
  return <h3>Shopping cart ({calculateTotalItemQty(items)})</h3>;
}

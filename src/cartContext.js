import { useReducer, useContext, createContext } from "react";
import { addToCart, incrementQuantity, decrementQuantity } from "./cartActions";

const StateContext = createContext();
const DispatchContext = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addToCart(state, action.product);
    case "INCREMENT_QTY":
      return incrementQuantity(state, action.index);
    case "DECREMENT_QTY":
      return decrementQuantity(state, action.index);
    default:
      throw new Error(`unknown action ${action.type}`);
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCart = () => useContext(StateContext);
export const useCartDispatch = () => useContext(DispatchContext);

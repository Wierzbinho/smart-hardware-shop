import { useReducer, useContext, createContext } from "react";

const StateContext = createContext();
const DispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newState = [...state, action.product];
      console.log(newState);
      return [...state, action.product];
    case "REMOVE":
      const tmp = [...state];
      tmp.splice(action.index, 1);
      return tmp;
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

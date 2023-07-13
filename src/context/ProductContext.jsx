import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { products } from "../data/products";

export const productContext = createContext();

const initialState = {
  cartProducts: [],
  favoriteProducts: [],
};

const reducer = (state, { type, payload }) => {
  const { cartProducts } = state;
  switch (type) {
    case "add-to-cart": {
      const product = products.find((pr) => pr.id === payload);
      const check = cartProducts.find((pr) => pr.id === payload);
      if (check) {
        let newCartProdudcts = cartProducts.map((pr) => {
          pr.id === payload && pr.quantity++;
          return pr;
        });
        return {
          ...state,
          cartProducts: newCartProdudcts,
        };
      } else {
        return {
          ...state,
          cartProducts: [...cartProducts, { ...product, quantity: 1 }],
        };
      }
    }
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextState = { ...state, dispatch };
  return (
    <productContext.Provider value={contextState}>
      {children}
    </productContext.Provider>
  );
};
ProductContext.propTypes = {
  children: PropTypes.node,
};

export default ProductContext;

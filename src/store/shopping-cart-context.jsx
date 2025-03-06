import { createContext } from "react";

//NOTE: items defined here will help with code autocompletion
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});

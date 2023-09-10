/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);
    if (found) {
      const updated = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  const removeBasket = (product) => {
    const found = basket.find((x) => x.id === product.id);
    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((x) => (x.id === updated.id ? updated : x));
      setBasket(newBasket);
    } else {
      const newList = basket.filter((x) => x.id !== product.id);
      setBasket(newList);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

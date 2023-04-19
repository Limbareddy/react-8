import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../data/fakeFetch";
const CartContext = createContext();

export const DetailsProvider = ({ children }) => {
  const cartItem = 7;
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();
  const getData = async () => {
    const res = await fakeFetch("https://example.com/api/products");
    if (res.status === 200) {
      setData(res.data.products);
    } else {
      setError(res.status);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addtoCart = (id) => {
    const cartitems = data.filter((item) => item.id === id);
    setItems([...items, cartitems]);
  };
  return (
    <div>
      <CartContext.Provider value={{ data, error, addtoCart, items }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useCart = () => useContext(CartContext);

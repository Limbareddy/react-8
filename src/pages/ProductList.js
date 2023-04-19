// import { useState, useEffect, useContext } from "react";

import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import { About } from "./About";
// import { Cart } from "./Cart";
import { useCart } from "../context/CartContext";

export function ProductList() {
  const { data, error, addtoCart } = useCart();
  return (
    <div>
      {/* <Link to="/error"> </Link> */}
      <h2> Product Listing Page </h2>
      {data.map(({ id, name, description, price, quantity }) => (
        <div>
          <h3>{name} </h3>
          <p>{description} </p>
          <p> Price: {price} </p>

          <Link to={`/About/${id}`}> View item </Link>

          <button onClick={addtoCart(id)}> Add to cart </button>
        </div>
      ))}
    </div>
  );
}

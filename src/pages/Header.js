import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext, detailsProvider, useCart } from "../context/CartContext";

const Header = () => {
  const { cartItem, error, data } = useCart();
  // console.log(cartItem)
  return (
    <>
      <nav>
        {/* <NavLink to="*"> </NavLink> */}
        <NavLink to="/">ProductListing Page </NavLink> ||{" "}
        <NavLink to="/cart"> Cart: {cartItem} </NavLink> ||{" "}
        <NavLink to="/WishList"> My Wishlist</NavLink>
      </nav>
    </>
  );
};

export { Header };

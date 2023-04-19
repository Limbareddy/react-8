import { useCart } from "../context/CartContext";
export function Cart() {
  const { items } = useCart();
  return (
    <>
      <h2>Total Items: {items.length} </h2>;
      {items.map(({ id, name, description, price, quantity }) => (
        <div>
          <h3>{name} </h3>
          <p>{description} </p>
          <p> Price: {price} </p>
        </div>
      ))}
    </>
  );
}

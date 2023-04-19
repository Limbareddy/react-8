import { useCart } from "../context/CartContext";
export default function Error() {
  const { error } = useCart();
  return (
    <>
      <h2> {error} page Not Found </h2>
    </>
  );
}

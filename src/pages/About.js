import { ProductList } from "./ProductList";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
export function About() {
  const { productId } = useParams();

  // let location = useLocation();
  // const { state } = location;
  // console.log(state);
  const { data } = useCart();
  // console.log(data)

  const product = data.find(({ id }) => id === parseInt(productId));

  const { name, price } = product ?? {};
  return (
    <>
      <p>{name}</p>
      <p>{product?.description}</p>
      <p>{price}</p>
      <p>{product?.quantity}</p>
      <p>{product?.category}</p>
      <p>{product?.brand}</p>
      <Link to="/"> see all </Link>
    </>
  );
}

//   return (
//     <div>
//       <h2> About </h2>
//       {/* <ProductList {...singleMobile} /> */}
//       {/* {
//         singleMobile.map(({name,description,price,quantity,brand,category})=>(
//           <div>
//           <h3>{name} </h3>
//           <p>{description} </p>
//           <p> Price: {price} </p>
//           <p>Quantity: {quantity} </p>
//           <p> Catergory :{category} </p>
//           <p> Brand :{brand} </p>
//           </div>
//         ))
//       } */}
//
//     </div>
//   );
// }

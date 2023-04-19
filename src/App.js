import "./styles.css";
import { ProductList } from "./pages/ProductList";
import { Routes, Route, Switch } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/WishList";
import { About } from "./pages/About";
import { Header } from "./pages/Header";
import { Error } from "./pages/Error";
export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* <Switch> */}
        <Route path="*" element={<Error />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/About/:productId" element={<About />} />
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

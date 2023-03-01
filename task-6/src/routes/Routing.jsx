import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import OrderConfirmation from "../pages/OrderConfirmation";
import Payment from "../pages/Payment";
import ProductsList from "../pages/ProductsList";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/payment"} element={<Payment />} />
      <Route path={"/orderConfirmation"} element={<OrderConfirmation />} />
    </Routes>
  );
}

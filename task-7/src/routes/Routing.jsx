import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const ProductsList = lazy(() => import("../pages/ProductsList"));
const Cart = lazy(() => import("../pages/Cart"));
const Payment = lazy(() => import("../pages/Payment"));
const OrderConfirmation = lazy(() => import("../pages/OrderConfirmation"));

export default function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>...</>}>
            <ProductsList />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<>...</>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="/payment"
        element={
          <Suspense fallback={<>...</>}>
            <Payment />
          </Suspense>
        }
      />
      <Route
        path="/orderConfirmation"
        element={
          <Suspense fallback={<>...</>}>
            <OrderConfirmation />
          </Suspense>
        }
      />
    </Routes>
  );
}

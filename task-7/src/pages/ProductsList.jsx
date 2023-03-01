import { Link } from "react-router-dom";
import "./ProductsList.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addToCart } from "../stores/products/ProductSlice";

export default function ProductsList() {
  const productsList = ["Kitkat", "Dairy Milk", "Mars", "Fivestar"];
  const carts = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/cart">
        <button style={{ float: "right" }}>Go to Cart({carts.length})</button>
      </Link>
      <h2>Products List</h2>
      <ul>
        {productsList.map((product, index) => {
          return (
            <li key={index}>
              {product}
              <button
                onClick={() =>
                  dispatch(addToCart({ id: nanoid(), cart: product }))
                }
              >
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const carts = useSelector((state) => state.product.cart);
  console.log(carts);

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
      {carts.map((product, index) => (
          <div key={index}>
            <li>{product.cart}</li>
          </div>
        ))}
      </ul>

      <Link to="/payment">
        <button>Proceed to Payement</button>
      </Link>
    </div>
  );
}

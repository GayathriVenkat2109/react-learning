import { useSelector } from "react-redux";
import Form from "../components/Form";

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
      <br /> <br />
      <h2>Address</h2>
      <Form />
    </div>
  );
}

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const carts = useSelector((state) => state.product.cart);
  const { state } = useLocation();

  const formSubmit = (event) => {
    event.preventDefault();
    alert("Order is being placed successfully");
  };

  return (
    <div>
      <h1>Order Confirmation</h1>
      <h2>Proceed to Buy : ({carts.length} items)</h2>
      {carts.map((product, index) => (
        <div key={index}>
          <h3>{product.cart}</h3>
        </div>
      ))}
      <div>
        <br></br>
        <h3>Selected Payment Details</h3>
        <p>{state.paymentMethod}</p>
      </div>
      <div>
        <br></br>
        <h3>Coupon Details</h3>
        <p>{state.formData.code}</p>
      </div>
      <div>
        <br></br>
        <h3>Address</h3>
        <h5>Name :{state.state2.formData.name}</h5>
        <h5>Email :{state.state2.formData.email}</h5>
        <h5>Phone :{state.state2.formData.phone}</h5>
      </div>
      <form onSubmit={formSubmit}>
        <button className="btn btn-default" type="submit">
          Place order
        </button>
      </form>
    </div>
  );
}

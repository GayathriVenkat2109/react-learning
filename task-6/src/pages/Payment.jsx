import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const radioBtnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <>
      <form>
        <h1>Select a Payment method</h1>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="1"
              checked={paymentMethod === "NetBanking"}
              value="NetBanking"
            />{" "}
            NetBanking
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="2"
              checked={paymentMethod === "COD"}
              value="COD"
            />{" "}
            COD
          </label>
        </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              name="same"
              onChange={radioBtnChange}
              id="3"
              checked={paymentMethod === "GPay"}
              value="GPay"
            />{" "}
            GPay
          </label>
        </div>
        <br />
        <div>Selected Payment method : {paymentMethod}</div>
        <br />
        <Link
          to="/orderConfirmation"
          state={{
            ...location.state,
            paymentMethod,
          }}
        >
          Proceed to order confirmation page
        </Link>
      </form>
    </>
  );
}

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Payment() {
  const location1 = useLocation();
  const location2 = useLocation();
  const state2 = location2.state;
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const radioBtnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [formData, setFormData] = useState({
    code: "",
  });

  const onChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
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
        <div>
          Coupoun code
          <input
            type="text"
            value={formData.code}
            onChange={onChange}
            name="code"
          />
        </div>
        <br />
        <Link
          to="/orderConfirmation"
          state={{
            ...location1.state,
            paymentMethod,
            formData,
            state2,
          }}
        >
          Proceed to order confirmation page
        </Link>
      </form>
    </>
  );
}

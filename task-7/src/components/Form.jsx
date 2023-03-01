import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Form() {
  const location = useLocation();
  const [addressData, setaddressData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (event) => {
    setaddressData((prevaddressData) => ({
      ...prevaddressData,
      [event.target.name]: event.target.value,
    }));
  };

  const setButtonBasedOnValidation = () => {
    if (!validateForm()) {
      return true;
    } else {
      return false;
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Form is submitted successfully");
  };

  const validateForm = () => {
    let isValid = false;
    if (
      addressData.name.length > 0 &&
      addressData.phone.length > 9 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        addressData.email
      )
    ) {
      isValid = true;
    }

    return isValid;
  };

  return (
    <div className="root">
      <form onSubmit={submitForm}>
        <div>
          Name
          <input
            type="text"
            value={addressData.name}
            onChange={onChange}
            name="name"
          />
        </div>
        <div>
          Email
          <input
            type="text"
            value={addressData.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div>
          <label>Phone No</label>
          <input
            type="text"
            value={addressData.phone}
            onChange={onChange}
            name="phone"
          />
        </div>
        <br />
        <Link
          to="/payment"
          state={{
            ...location.state,
            addressData,
          }}
        >
          <button type="submit" disabled={setButtonBasedOnValidation()}>
            Proceed to Payement
          </button>
        </Link>
      </form>
    </div>
  );
}

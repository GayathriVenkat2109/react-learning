import React from "react";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("INVALID FORM!!");
    } else {
      console.log("Form Submitted Successfully");
    }
  };

  const validateForm = () => {
    let isValid = false;
    if (
      formData.name.length > 0 &&
      formData.message.length > 0 &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        formData.email
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
            value={formData.name}
            onChange={onChange}
            name="name"
          />
        </div>
        <div>
          Email
          <input
            type="text"
            value={formData.email}
            onChange={onChange}
            name="email"
          />
        </div>
        <div>
          <label>Your Message</label>
          <textarea
            value={formData.message}
            onChange={onChange}
            name="message"
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

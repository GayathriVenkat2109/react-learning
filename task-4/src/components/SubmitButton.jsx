import React from "react";

export default function SubmitButton({ buttonDisable }) {
  if (buttonDisable) {
    return (
      <button type="submit" disabled>
        Submit Form
      </button>
    );
  } else {
    return <button type="submit">Submit Form</button>;
  }
}

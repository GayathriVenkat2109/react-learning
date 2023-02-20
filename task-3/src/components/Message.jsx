import { useEffect, useState } from "react";

const Mesage = ({ response }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (response) {
      setMessage("API fetch is successful");
    } else {
      setMessage("API fetch is not successful");
    }
  }, [response]);

  return (
    <>
      <p> {message}</p>
    </>
  );
};

export default Mesage;

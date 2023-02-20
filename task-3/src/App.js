import { useEffect, useState } from "react";
import { Fragment } from "react";
import Mesage from "./components/Message";
import PostList from "./components/PostList";

function App() {
  const [data, setData] = useState();
  let responseValue = null;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <PostList response={data} />
      {data ? (responseValue = true) : (responseValue = false)}
      <Mesage response={responseValue} />
    </Fragment>
  );
}

export default App;

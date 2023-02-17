import { Fragment, useState } from "react";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const showUser = () => {
    setUser(true);
  };

  const [admin, setAdmin] = useState(false);
  const showAdmin = () => {
    setAdmin(true);
  };

  return (
    <Fragment>
      <div className="user">
        <button onClick={showUser}>Show User</button>
        {user ? <UserInfo /> : null}
      </div>
      <div className="admin">
        <button onClick={showAdmin}>Show Admin</button>
        {admin ? <AdminInfo /> : null}
      </div>
    </Fragment>
  );
}

export default App;

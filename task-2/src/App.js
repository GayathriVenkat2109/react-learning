import { Fragment, useState } from "react";
import UserInfo from "./components/UserInfo";
import AdminInfo from "./components/AdminInfo";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const showUser = () => {
    setUser(true);
  };
  const hideUser = () => {
    setUser(false);
  };

  const [admin, setAdmin] = useState(false);
  const showAdmin = () => {
    setAdmin(true);
  };
  const hideAdmin = () => {
    setAdmin(false);
  };

  return (
    <Fragment>
      <div className="user">
        {user ? <button onClick={hideUser}>Hide User</button> : <button onClick={showUser}>Show User</button>}
        {user ? <UserInfo /> : null}
      </div>
      <div className="admin">
        {admin ? <button onClick={hideAdmin}>Hide Admin</button> : <button onClick={showAdmin}>Show Admin</button>}
        {admin ? <AdminInfo /> : null}
      </div>
    </Fragment>
  );
}

export default App;

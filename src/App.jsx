import { useState } from "react";
import LogIn from "./LogIn";
import LoggedIn from "./LoggedIn";
import facade from "./apiFacade";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    /*TODO*/
  };
  const login = (user, pass) => {
    /*TODO*/
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn loggedIn={loggedIn} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
export default App;

import { useState } from "react";
import LogIn from "./LogIn";
import LoggedIn from "./LoggedIn";
import facade from "./apiFacade";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    /*TODO*/
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    /*TODO*/
    facade.login(user, pass).then((res) => setLoggedIn(true));
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

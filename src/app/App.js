import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accaunt from "./components/pages/accaunt";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import NavBar from "./components/pages/navBar";
import UserPage from "./components/pages/userPage";
import api from "./api";

function App(location) {
  return (
    <div>
      {console.log(
        api.users.getById("67rdca3eeb7f6fgeed47181f").then((data) => {
          return data;
        })
      )}
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/users" exact component={Accaunt} />
          <Route
            path="/users/:userId?"
            render={(props) => <UserPage {...props} />}
          />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

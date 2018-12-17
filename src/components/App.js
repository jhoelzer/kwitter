import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Navbar from "./navbar.js";
import Login from "./Login";
import Register from "./Register";
import EditProfile from "./EditProfile";
import Homepage from "./Homepage";

class App extends Component {
  render() {
    return (
      <div className="background">
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/edit" render={() => <EditProfile />} />
          <Route path="/home" render={() => <Homepage />} />
          <Route path="/logout" render={() => <Login />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
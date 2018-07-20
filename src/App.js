import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import LoginComponent from "./component/login/LoginComponenent";
import { Switch, withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import HomeComponent from "./component/main/HomeComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="">
        <Switch>
          <Route exact path={"/"} component={LoginComponent} />
          <Route path={"/home"} component={HomeComponent} />
        </Switch>
      </div>
    );
  }
}
export default connect()(withRouter(App));

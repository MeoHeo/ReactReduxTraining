import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { simpleAction } from "./actions/actions";
import LoginComponent from "./component/login/LoginComponenent";
import {Switch, withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import HomeComponent from "./component/main/HomeComponent";

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
  }
  changeText = () => {
    if (this.state.text === "Hi") {
      this.setState({ text: "Hello" });
    } else {
      this.setState({ text: "Hi" });
    }
  };
  changeState = () => {
    this.setState({ text: "Halu Halu" });
  };
  render() {
    return (
      <div className="">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

        </p> */}
        {/* <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }

        </pre>
        <button onClick={this.changeState}>CHANGE STATE</button><br/><br/>

        <button onClick={this.changeText}>CHANGE COMPONENT</button>
        {
          this.state.text === "Hi" ? <Greeting2 propFromParent={this.state.text} /> : <Greeting propFromParent={this.state.text} />
        } */}
        {/* <MainComponent/>
        <LoginComponent/> */}
        <Switch>
          <Route exact path={"/"} component={LoginComponent} />
          <Route path={"/home"} component={HomeComponent} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));

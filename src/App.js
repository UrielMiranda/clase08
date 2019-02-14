import React, { Component } from "react";
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <section>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Redirect to="/"></Redirect>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

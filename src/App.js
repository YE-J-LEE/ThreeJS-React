import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Container from "./routes/Container";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      // Link를 포함하는 Navigation은 반드시 BrowserRouter or HashRouter안에 있어야 한다.
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Container}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
    );
  }
}

export default App;

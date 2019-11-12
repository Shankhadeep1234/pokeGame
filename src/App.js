import React, { Component } from "react";
import Pokegame from "./Pokegame";
import "./App.css";
import Clicked from "./Clicked";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
        <Clicked />
      </div>
    );
  }
}

export default App;

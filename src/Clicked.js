import React, { Component } from "react";

class Clicked extends Component {
  state = { Clicked: false };

  handleClicked = () => {
    this.setState({
      Clicked: true
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.Clicked ? "Clicked!!" : "UnClicked"}</h3>
        <button onClick={this.handleClicked}>Clicked</button>
      </div>
    );
  }
}

export default Clicked;

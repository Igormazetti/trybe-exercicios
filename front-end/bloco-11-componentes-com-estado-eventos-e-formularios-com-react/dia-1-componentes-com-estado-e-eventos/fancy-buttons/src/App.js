import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickSecond = this.handleClickSecond.bind(this);
    this.handleClickThird = this.handleClickThird.bind(this);
  }

  handleClickFirst() {
    console.log(this);
    console.log("Clicou no botão 01");
  }
  handleClickSecond() {
    console.log("Clicou no botão 02");
  }
  handleClickThird() {
    console.log("Clicou no botão 03");
  }

  render() {
    return (
      <>
        <button onClick={this.handleClickFirst}>Button 01</button>
        <button onClick={this.handleClickSecond}>Button 02</button>
        <button onClick={this.handleClickThird}>Button 03</button>
      </>
    );
  }
}

export default App;

/* eslint-disable no-unused-expressions */
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickSecond = this.handleClickSecond.bind(this);
    this.handleClickThird = this.handleClickThird.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }

  handleClickFirst() {
    this.setState((estadoAnterior) => ({
      clicksBtnOne: estadoAnterior.clicksBtnOne + 1,
    }));
  }
  handleClickSecond() {
    this.setState((estadoAnterior) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1,
    }));
  }
  handleClickThird() {
    this.setState((estadoAnterior) => ({
      clicksBtnThree: estadoAnterior.clicksBtnThree + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClickFirst}>
          {this.state.clicksBtnOne}
        </button>
        <button onClick={this.handleClickSecond}>
          {this.state.clicksBtnTwo}
        </button>
        <button onClick={this.handleClickThird}>
          {this.state.clicksBtnThree}
        </button>
      </>
    );
  }
}

export default App;

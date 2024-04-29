import React, { Component } from "react";
import "./counter.css";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div>
        <strong>{this.state.counter}</strong>
        <button className="btn-counter" onClick={this.increase}>
          Increase
        </button>
        <button className="btn-counter" onClick={this.decrease}>
          Decrease
        </button>
        <button className="btn-counter" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;

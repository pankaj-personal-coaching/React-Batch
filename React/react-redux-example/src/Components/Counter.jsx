import React from "react";
import { connect } from "react-redux";
import { decrement, reset, increment } from "./Actions/CounterActions";
const Counter = (props) => {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.counter.count,
});
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

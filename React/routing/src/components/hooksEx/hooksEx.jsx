import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={reset}>Reset</button>{" "}
    </div>
  );
};

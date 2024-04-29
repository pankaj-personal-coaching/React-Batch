import React from "react";
import { HigherOrderComponent } from "./HigherOrderComponentEx";
const MyComponent = ({ loading }) => {
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Hello, We are in My component.</p>}
    </div>
  );
};
export const HOCFinalComponent = HigherOrderComponent(MyComponent);

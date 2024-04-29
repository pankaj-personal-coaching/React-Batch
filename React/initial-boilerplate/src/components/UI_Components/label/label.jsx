import React from "react";
const Label = ({ text }) => {
  return (
    <label htmlFor="name" id="name">
      <strong>{text}</strong>
    </label>
  );
};
export default Label;

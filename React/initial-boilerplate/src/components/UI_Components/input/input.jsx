import React from "react";
const Input = ({
  handleOnChange,
  handleKeyDown,
  placeholder,
  type,
  id,
  name,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default Input;

import React from "react";
import Table from "../table/table";
import "./main.css";
const main = ({ tableContent, sayHello }) => {
  return (
    <div className="container">
      <h1>User Details</h1>
      <Table tableData={tableContent} sayHello={sayHello} />
    </div>
  );
};
export default main;

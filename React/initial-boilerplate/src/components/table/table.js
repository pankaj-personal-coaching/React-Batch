import React from "react";
import "./table.css";
const Table = (props) => {
  const defaultHeaders = ["ID", "Name", "Designation", "Salary", "City"].map(
    (i) => i.toUpperCase()
  );
  const mapHeaders = () => {
    let obj = props.tableData[0];
    return Object.keys(obj).map((key) => {
      return key.toUpperCase();
    });
  };
  const tableHeader = () => {
    const headers = props.tableData.length ? mapHeaders() : defaultHeaders;
    return (
      <thead>
        {headers.map((header) => {
          return <th>{header}</th>;
        })}
      </thead>
    );
  };
  return (
    <>
      <table id="table" style={{ border: "1px solid black" }}>
        {tableHeader()}
        {props.tableData.map((item) => {
          return (
            <tr>
              {Object.keys(item).map((key) => {
                return <td>{item[key]}</td>;
              })}
            </tr>
          );
        })}
      </table>
      {props.showButton && <button onClick={props.sayHello}>Say Hello</button>}
    </>
  );
};

export default Table;

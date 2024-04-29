import React from "react";
import "./footer.css";
const footer = (props) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>{props.footerValue.value}</p>
      </div>
    </footer>
  );
};
export default footer;

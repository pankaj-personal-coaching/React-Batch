import React, { Component } from "react";
import "./header.css";
import { formatDate } from "../../utils/dateUtil";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      header: {
        text1: "Welcome to the React Course from state",
        text2: "Getting Started with React from state",
        text3: "HTML, CSS, Javascript and React from state",
      },
      isLoggedIn: true,
    };
  }
  greet = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };
  getHeader = () => {
    const {
      header: { text1, text2, text3 },
      isLoggedIn,
    } = this.state;

    // Usong if-else
    if (isLoggedIn) {
      return (
        <div className="header-wrapper">
          <h1>{text1}</h1>
          <h2>{text2}</h2>
          <h3>{text3}</h3>
        </div>
      );
    } else {
      return null;
    }

    // Using ternary operator
    // return isLoggedIn ? (
    //   <div className="header-wrapper">
    //     <h1>{text1}</h1>
    //     <h2>{text2}</h2>
    //     <h3>{text3}</h3>
    //   </div>
    // ) : null;

    // Using && operator
    // return (
    //   isLoggedIn && (
    //     <div className="header-wrapper">
    //       <h1>{text1}</h1>
    //       <h2>{text2}</h2>
    //       <h3>{text3}</h3>
    //     </div>
    //   )
    // );
  };
  render() {
    return (
      <header>
        {this.getHeader()}
        {/* {this.state.isLoggedIn ? "User is logged in" : "User is not logged in"}
        <br />
        <button onClick={this.greet}>
          {this.state.isLoggedIn ? "Hide" : "Show"}
        </button>
        <br />
        {new Date().toString()}
        {formatDate()} */}
      </header>
    );
  }
}
export default Header;

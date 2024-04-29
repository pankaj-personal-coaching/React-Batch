import React, { Component } from "react";

class UncontrolledComponent extends Component {
  firstName = React.createRef();
  email = React.createRef();

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.firstName.current.value);
    console.log(this.email.current.value);
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitForm}>
          <h1 class="heading">User</h1>
          <div class="form-elements">
            <div>
              <label for="name" id="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full name.."
                ref={this.firstName}
              />
              <label for="email" id="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email.."
                ref={this.email}
              />
              <br />
              <button
                style={{
                  "border-radius": "30px",
                  border: "1px solid #ccc",
                  width: "100px",
                  height: "40px",
                  "background-color": "rgb(125, 182, 239)",
                  color: "rgb(34, 1, 1)",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;

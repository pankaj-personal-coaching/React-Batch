import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../Actions/UserActions";
import "./user.css";
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      userForm: {
        name: "",
        email: "",
        address: "",
        car: "",
      },
    };
  }

  onChange = (event) => {
    const { userForm } = this.state;
    let { name, value } = event.target;
    this.setState({ userForm: { ...userForm, [name]: value } });
  };

  submitForm = (event) => {
    event.preventDefault(); // Stops the default behavior of form element, Specifically refreshing the page.
    console.log(this.state);
    this.props.addUser(this.state.userForm);
  };

  render() {
    return (
      <div class="form-container">
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
                onChange={this.onChange}
              />
              <label for="email" id="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email.."
                onChange={this.onChange}
              />
            </div>
            <div>
              <label>Address:</label>
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="1"
                onChange={this.onChange}
              ></textarea>
              <label for="">Car:</label>
              <select name="car" id="select-car" onChange={this.onChange}>
                <option value="default">--Select--</option>
                <option value="valvo">Volvo</option>
                <option value="bmw">BMW</option>
                <option value="tata">Tata</option>
                <option value="maruti">Maruti</option>
                <option value="audi">Audi</option>
                <option value="kia">Kia</option>
              </select>
            </div>

            <div class="button">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(UserForm);

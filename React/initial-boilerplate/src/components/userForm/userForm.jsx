import React, { Component } from "react";
import "./userForm.css";
import Label from "../UI_Components/label/label";
import Input from "../UI_Components/input/input";
class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      userForm: {
        name: "",
        email: "",
        password: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        skills: {
          Javascript: false,
          React: false,
          NodeJS: false,
          HTML: false,
          CSS: false,
        },
        address: "",
        car: "",
        file: {},
      },
      nameError: false,
    };
  }

  greetPeople = () => {
    alert("Welcome to the React events!");
  };

  // onNameChange = (event) => {
  //   const { userForm } = this.state;
  //   let name = event.target.value;
  //   this.setState({ userForm: { ...userForm, name } });
  // };

  onBlur = () => {
    console.log(this.state.userForm);
  };

  onChange = (event) => {
    const { userForm } = this.state;
    let { name, value, type, checked, files } = event.target;
    if (type === "file") {
      this.setState({ userForm: { ...userForm, file: files[0] } });
    } else if (type === "checkbox") {
      this.setState({
        userForm: {
          ...userForm,
          skills: { ...userForm.skills, [name]: checked },
        },
      });
    } else {
      this.setState({ userForm: { ...userForm, [name]: value } });
    }
  };

  submitForm = (event) => {
    event.preventDefault(); // Stops the default behavior of form element, Specifically refreshing the page.
    console.log(this.state);
    if (!this.state.userForm.name) {
      this.setState({ nameError: true });
    }
  };

  handleMouseLeave = () => {
    console.log("Mouse is leaving!");
  };

  handleMouseEnter = () => {
    console.log("Mouse is entering!");
  };

  handleDoubleClick = () => {
    console.log("Double clicked!");
  };

  handleKeyDown = (event) => {
    console.log(event.key);
  };

  handleCopy = () => {
    alert("Please check copyright permission to copy the text");
  };

  render() {
    return (
      <div class="form-container">
        {/* <p onCopy={this.handleCopy}>
          Rohit Gurunath Sharma (born 30 April 1987) is an Indian international
          cricketer who currently captains the India national cricket team
          across all formats. He is a right-handed batsman. Considered one of
          the best batsmen of his generation and one of the greatest opening
          batters of all time,[3] Sharma is known for his timing, elegance,
          six-hitting abilities and leadership skills. Sharma holds several
          batting records which famously include most sixes in international
          cricket,[a] most double centuries in ODI cricket (3), most centuries
          at Cricket World Cups (7) and joint most hundreds in Twenty20
          Internationals (5). Rohit Sharma is the first player to score 5 T20I
          centuries.[5] He plays for Mumbai Indians in IPL and for Mumbai in
          domestic cricket.
        </p> */}
        <form onSubmit={this.submitForm}>
          <h1 class="heading">User</h1>
          <div class="form-elements">
            <div>
              <Label text={"*Full Name"} />
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter full name.."
                handleOnChange={this.onChange}
                handleKeyDown={this.handleKeyDown}
              />
              {this.state.nameError && (
                <span style={{ color: "red" }}>Name is mandatory</span>
              )}
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
              <label for="password" id="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password.."
                onChange={this.onChange}
              />
              <label for="number" id="number">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="number"
                placeholder="Enter your number.."
                onChange={this.onChange}
              />
            </div>
            <div>
              <label for="birthdate" id="birthdate">
                Birth Date
              </label>
              <input
                type="datetime-local"
                name="dateOfBirth"
                id="birthdate"
                onChange={this.onChange}
              />
            </div>
            <div>
              <label for="">Gender</label>
              <input
                type="radio"
                name="gender"
                id="gender-male"
                value="Male"
                onChange={this.onChange}
                checked={this.state.userForm.gender === "Male"}
              />
              <label for="gender-male">Male</label>
              <input
                type="radio"
                name="gender"
                id="gender-female"
                onChange={this.onChange}
                value="Female"
                checked={this.state.userForm.gender === "Female"}
              />
              <label for="gender-female">Female</label>
              <input
                type="radio"
                name="gender"
                id="gender-other"
                onChange={this.onChange}
              />
              <label for="gender-other">Other</label>
            </div>
            <div>
              <label>Skills:</label>
              <input
                type="checkbox"
                name="Javascript"
                id="javascript"
                onChange={this.onChange}
              />
              <label for="javascript">Javascript</label>
              <input
                type="checkbox"
                name="React"
                id="react"
                onChange={this.onChange}
              />
              <label for="react">React</label>
              <input
                type="checkbox"
                name="NodeJS"
                id="nodejs"
                onChange={this.onChange}
              />
              <label for="nodejs">NodeJS</label>
              <input
                type="checkbox"
                name="HTML"
                id="html"
                onChange={this.onChange}
              />
              <label for="html">HTML</label>
              <input
                type="checkbox"
                name="CSS"
                id="css"
                onChange={this.onChange}
              />
              <label for="css">CSS</label>
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
            <div>
              <label>Upload file</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.onChange}
              />
            </div>
            <div class="button">
              <input
                type="submit"
                value="Submit"
                onDoubleClick={this.handleDoubleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;

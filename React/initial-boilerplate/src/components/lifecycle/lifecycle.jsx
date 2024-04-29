import React, { Component } from "react";
import Label from "../UI_Components/label/label";
import Table from "../table/table";
class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("I am a constructor!");
    this.state = {
      isUpdate: false,
      userDetails: {},
      userList: [],
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("I am in getDerivedStateFromProps!");
    // if (props?.tableContent?.length) {
    //   return {
    //     userList: props.tableContent,
    //   };
    // }
    return null;
  }

  handleClick = () => {
    this.setState({ userList: this.props.tableContent });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("We are in shouldComponentUpdate method!");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("We are in getSnapshotBeforeUpdate method!");
  }

  componentDidUpdate() {
    console.log("We are in componentDidUpdate method!");
  }

  componentWillUnmount() {
    console.log("We are in componentWillUnmount method!");
  }

  componentDidMount() {
    console.log("We are in componentDidMount method!");
  }

  render() {
    console.log("We are in Render method!");
    return (
      <div>
        <div className="emp-details">
          <Label text={"Employee Details"} />
          {!!this.state.userList.length && <label htmlFor="">In Update</label>}
        </div>

        <div className="emp-list">
          <Label text={"Employee List"} />
          {!!this.state.userList.length && (
            <Table showButton={false} tableData={this.state.userList} />
          )}
          {!this.state.userList.length && <p>No records found!</p>}
        </div>
        <button onClick={this.handleClick}>ClickMe</button>
        <a href="https://www.google.com/">Google</a>
      </div>
    );
  }
}
export default Lifecycle;

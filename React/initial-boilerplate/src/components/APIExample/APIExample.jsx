import React, { Component } from "react";
import Table from "../table/table";
import { getData } from "../../utils/API";
import { getDataAxios } from "../../utils/axios";
class APIExample extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("API Call for get user data");
    const URL = "https://jsonplaceholder.typicode.com/users";
    getDataAxios(URL).then((result = []) => {
      let users = result.map((user) => {
        return {
          ...user,
          address: user.address.city,
          company: user.company.name,
        };
      });
      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        {users.length ? (
          <>
            <Table tableData={users}></Table>
          </>
        ) : (
          <div>
            <p>
              <strong>No Records Found!</strong>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default APIExample;

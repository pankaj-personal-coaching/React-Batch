import React, { useState, useEffect } from "react";
import Table from "../table/table";
import { getData } from "../util/API";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("API Call for get user data");
    const URL = "https://jsonplaceholder.typicode.com/users";
    getData(URL).then((result = []) => {
      let users = result.map((user) => {
        return {
          ...user,
          address: user.address.city,
          company: user.company.name,
        };
      });
      setUsers(users);
    });
  }, []);

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
};

export default Users;

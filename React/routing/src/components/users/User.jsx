import React, { useState, useEffect } from "react";
import { getData } from "../util/API";
const User = () => {
  const [user, setUser] = useState(null);
  const id = window.location.pathname.split("/")[2];
  useEffect(() => {
    const URL = `https://jsonplaceholder.typicode.com/users/${id}`;
    getData(URL).then((result) => {
      setUser(result);
    });
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {user && Object.keys(user).length && (
        <>
          <div>
            <label htmlFor="id">ID: {user.id}</label>
          </div>
          <div>
            <label htmlFor="name">Name: {user.name}</label>
          </div>
          <div>
            <label htmlFor="username">Username: {user.username}</label>
          </div>
          <div>
            <label htmlFor="email">Email: {user.email}</label>
          </div>
          <div>
            <label htmlFor="phone">Phone: {user.phone}</label>
          </div>
          <div>
            <label htmlFor="websiter">Website: {user.website}</label>
          </div>
          <div>
            <label htmlFor="address">Address: {user.address.city}</label>
          </div>
          <div>
            <label htmlFor="company">Company: {user.company.name}</label>
          </div>
        </>
      )}
    </div>
  );
};

export default User;

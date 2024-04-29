import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>This is our About page.</h1>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>ID: {user.id}</p>
    </div>
  );
};

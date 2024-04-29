import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const updateUser = () => {
    setUser({
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      role: "Developer",
      id: 6,
    });
  };
  return (
    <div>
      <h1>This is our Home page.</h1>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>ID: {user.id}</p>
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

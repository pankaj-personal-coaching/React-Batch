import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Counter from "./components/counter/counter";
import UserForm from "./components/userForm/userForm";
import UncontrolledComponent from "./components/uncontrolled-user-form/uncontrolled-user-form";
import Lifecycle from "./components/lifecycle/lifecycle";
import { HOCFinalComponent } from "./components/HOC/Mycomponent";
import APIExample from "./components/APIExample/APIExample";

function App() {
  const tableContent = [
    {
      id: "0001",
      name: "Pankaj",
      designation: "Software Engi.",
      salary: 15000,
      city: "Pune",
    },
    {
      id: "0002",
      name: "Rahul",
      designation: "Trainee",
      salary: 8000,
      city: "Jalgaon",
    },
    {
      id: "0003",
      name: "Siddhant",
      designation: "Sr. Software Engi.",
      salary: 35000,
      city: "Mumbai",
    },
    {
      id: "0004",
      name: "Rohit",
      designation: "Manager",
      salary: 55000,
      city: "Banglore",
    },
    {
      id: "0005",
      name: "Sachin",
      designation: "President",
      salary: 100000,
      city: "New Delhi",
    },
  ];
  const footer = {
    value: "Copyright 2024",
  };
  const sayHello = () => {
    alert("Hello Everyne!");
  };
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Counter /> */}
      {/* <Main tableContent={tableContent} sayHello={sayHello} /> */}
      {/* <UserForm /> */}
      {/* <UncontrolledComponent /> */}
      {/* <Lifecycle tableContent={tableContent} />
      <Footer footerValue={footer} /> */}
      {/* <HOCFinalComponent /> */}
      <APIExample />
    </div>
  );
}

export default App;

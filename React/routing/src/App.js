import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Contact } from "./components/contact-us/contact";
import Users from "./components/users/users";
import User from "./components/users/User";
import { Counter } from "./components/hooksEx/hooksEx";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <ul className="dropdown" style={{ float: "left" }}>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                  <NavLink to="/hooks">Hooks</NavLink>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <Routes>
                <Route path="/home" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} />
                <Route path="/users" Component={Users} />
                <Route path="/users/:id" Component={User} />
                <Route path="hooks" Component={Counter} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

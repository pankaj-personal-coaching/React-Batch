import "./App.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Counter from "./Components/Counter";
import { counterReducer } from "./Components/Reducers/CounterReducer";
import { userReducer } from "./Components/Reducers/UserReducer";
import Test from "./Components/Test/Test";
import UserForm from "./Components/Users/User";
import UserList from "./Components/Users/Users";

const reducers = combineReducers({
  counter: counterReducer,
  userState: userReducer,
});
const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Counter />
          <Test />
          <UserForm />
          <UserList />
        </header>
      </div>
    </Provider>
  );
}

export default App;

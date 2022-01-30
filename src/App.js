import { Provider } from "react-redux";

import store from "./redux/store";

import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Post />
      </div>
    </Provider>
  );
}

export default App;

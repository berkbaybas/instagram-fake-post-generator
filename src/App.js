import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Post />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

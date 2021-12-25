import { createStore } from "redux";
import reducers from "./reducers";

const initialState = {
  post: {
    username: "username2",
    url: "https://picsum.photos/600/600",
    caption: "lorem ipsum sit dolor amet!",
    like: 123,
    comment: 123,
    saved: false,
    liked: true,
    date: 3,
  },
};

const store = createStore(reducers, initialState);

export default store;

export { initialState };

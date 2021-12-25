import { initialState } from "../store";

const postReducer = (
  state = {
    post: {
      username: "username",
      url: "https://picsum.photos/600/600",
      like: 123,
      comment: 123,
      saved: false,
      liked: true,
      date: 3,
    },
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { postReducer };

import { initialState } from "../store";

const postReducer = (
  state = {
    post: {},
  },
  action
) => {
  switch (action.type) {
    case "HANDLE_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

export { postReducer };

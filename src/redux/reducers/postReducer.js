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
    case "HANDLE_LIKE":
      return { ...state, like: action.payload };
    case "HANDLE_COMMENT":
      return { ...state, comment: action.payload };
    case "HANDLE_DATE":
      return { ...state, date: action.payload };
    case "HANDLE_CAPTION":
      return { ...state, caption: action.payload };
    case "HANDLE_URL":
      return { ...state, url: action.payload };
    case "HANDLE_PROFILEURL":
      return { ...state, profileUrl: action.payload };
    default:
      return state;
  }
};

export { postReducer };

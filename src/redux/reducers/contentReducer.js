const initialState = {
  username: "username",
  like: 1223,

  post: {
    username: "username",
    url: "https://picsum.photos/600/600",
    profileUrl: "https://picsum.photos/32/32",
    caption: "lorem ipsum sit dolor amet!",
    like: 123,
    comment: 123,
    saved: true,
    liked: true,
    date: 3,
  },
};

const contenteducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_USERNAME":
      return { ...state, post: { ...state.post, username: action.payload } };
    case "HANDLE_LIKE":
      return { ...state, post: { ...state.post, like: action.payload } };
    case "HANDLE_COMMENT":
      return { ...state, post: { ...state.post, comment: action.payload } };
    case "HANDLE_DATE":
      return { ...state, post: { ...state.post, date: action.payload } };
    case "HANDLE_CAPTION":
      return { ...state, post: { ...state.post, caption: action.payload } };
    case "HANDLE_URL":
      return { ...state, post: { ...state.post, url: action.payload } };
    case "HANDLE_PROFILEURL":
      return { ...state, post: { ...state.post, profileUrl: action.payload } };
    case "HANDLE_SAVED":
      return { ...state, post: { ...state.post, saved: action.payload } };
    case "HANDLE_LIKED":
      return { ...state, post: { ...state.post, liked: action.payload } };
    default:
      return state;
  }
};

export default contenteducer;

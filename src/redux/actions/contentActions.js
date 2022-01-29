export const handleUsername = (username) => {
  return { type: "HANDLE_USERNAME", payload: username };
};

export const handleLike = (like) => {
  return { type: "HANDLE_LIKE", payload: like };
};

export const handleComment = (comment) => {
  return { type: "HANDLE_COMMENT", payload: comment };
};

export const handleDate = (date) => {
  return { type: "HANDLE_DATE", payload: date };
};

export const handleCaption = (caption) => {
  return { type: "HANDLE_CAPTION", payload: caption };
};

export const handleUrl = (url) => {
  return { type: "HANDLE_URL", payload: url };
};

export const handleProfileUrl = (profileUrl) => {
  return { type: "HANDLE_PROFILEURL", payload: profileUrl };
};

export const handleSaved = (saved) => {
  return { type: "HANDLE_SAVED", payload: saved };
};

export const handleLiked = (liked) => {
  return { type: "HANDLE_LIKED", payload: liked };
};

export const handleStory = (story) => {
  return { type: "HANDLE_STORY", payload: story };
};

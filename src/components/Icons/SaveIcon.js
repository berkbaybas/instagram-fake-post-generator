import * as React from "react";

function SaveIcon(props) {
  return (
    <svg
      aria-label="Save"
      className="prefix___8-yf5"
      color="#262626"
      fill="#262626"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 21l-8-7.56L4 21V3h16v18z"
      />
    </svg>
  );
}

const MemoSaveIcon = React.memo(SaveIcon);
export default MemoSaveIcon;

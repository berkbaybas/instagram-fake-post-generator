import * as React from "react";

function SaveSolidIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z" />
    </svg>
  );
}

const MemoSaveSolidIcon = React.memo(SaveSolidIcon);
export default MemoSaveSolidIcon;

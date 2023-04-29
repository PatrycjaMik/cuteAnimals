import React from "react";
import "./Like.css";

export default function Dislike({ decrease, handleDecrease }) {
  return (
    <>
      <button onClick={handleDecrease}>
        <img src="arrowDown.png" alt="like" width="10px" height="10px" />
        <p>Dislike</p>
        <span>{decrease}</span>
      </button>
    </>
  );
}

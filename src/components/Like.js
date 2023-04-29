import React from "react";
import "./Like.css";

export default function Like({ grow, handleGrow }) {
  return (
    <>
      <button onClick={handleGrow}>
        <img src="arrowUp.png" alt="like" width="10px" height="10px" />
        <p>Like </p>
        <span>{grow}</span>
      </button>
    </>
  );
}

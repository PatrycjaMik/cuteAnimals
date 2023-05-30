import React from "react";
import "./Like.css";
import { useDispatch } from "react-redux";

export default function Like({ animal }) {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    const incrementAction = { type: "ADD_LIKE", payload: animal.id };
    dispatch(incrementAction);
  };

  return (
    <>
      <button onClick={incrementHandler}>
        <img src="arrowUp.png" alt="like" width="10px" height="10px" />
        <p>Like </p>
        <span>{animal.upvotes}</span>
      </button>
    </>
  );
}

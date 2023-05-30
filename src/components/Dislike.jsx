import React from "react";
import "./Like.css";
import { useDispatch } from "react-redux";

export default function Dislike({ animal }) {
  const dispatch = useDispatch();

  const decrementHandler = () => {
    const decrementtAction = { type: "ADD_DISLIKE", payload: animal.id };
    dispatch(decrementtAction);
  };
  return (
    <div>
      <button onClick={decrementHandler} type="button">
        <img src="arrowDown.png" alt="like" width="10px" height="10px" />
        <p>Dislike</p>
        <span>{animal.downvotes}</span>
      </button>
    </div>
  );
}

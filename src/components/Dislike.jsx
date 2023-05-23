import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";

export default function Dislike() {
 
  const dispatch = useDispatch();
  const numberOfDislikes = useSelector((state) => state.numberOfDislikes);
  

   const decrementHandler = () => {
    const decrementtAction = { type: "COUNT_DISLIKES" };
    dispatch(decrementtAction);
  };
  return (
    <div>
      <button onClick={decrementHandler}>
        <img src="arrowDown.png" alt="like" width="10px" height="10px" />
        <p>Dislike</p>
        <span>{numberOfDislikes}</span>
      </button>
    </div>
  );
}

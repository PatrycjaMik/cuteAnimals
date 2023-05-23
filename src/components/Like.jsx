import React from "react";
import "./Like.css";
import { useSelector, useDispatch } from "react-redux";


export default function Like() {

  const dispatch = useDispatch();
  const numberOfLikes = useSelector((state) => state.numberOfLikes);
  

   const incrementHandler = () => {
    const incrementAction = { type: "COUNT_LIKES" };
    dispatch(incrementAction);
  };

  return (
    <>
      <button onClick={incrementHandler}>
        <img src="arrowUp.png" alt="like" width="10px" height="10px" />
        <p>Like </p>
        <span>{numberOfLikes}</span>
      </button>
    </>
  );
}

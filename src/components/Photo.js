import React from "react";
import "./Photo.css";
import Like from "./Like";
import Dislike from "./Dislike";
import { useState } from "react";

export default function Photo({ item }) {
  const [grow, setGrow] = useState(0);
  const [decrease, setDecrease] = useState(0);

  const handleGrow = () => {
    setGrow(grow + 1);
  };

  const handleDecrease = () => {
    setDecrease(decrease + 1);
  };

  return (
    <>
      <div className="wrapper">
        <div className="photoWrap">
          <img src={item.img} alt="cute" width="270px" />
        </div>
        <h3>{item.title}</h3>
        <div className="likeWrap">
          <Like grow={grow} handleGrow={handleGrow} />
          <Dislike decrease={decrease} handleDecrease={handleDecrease} />
        </div>
      </div>
    </>
  );
}

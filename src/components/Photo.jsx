import React from "react";
import "./Photo.css";
import Like from "./Like";
import Dislike from "./Dislike";


export function Photo({ item }) {

  return (
    <>
      <div className="wrapper">
        <div className="photoWrap">
          <img src={item.img} alt="cute" width="270px" />
        </div>
        <h3>{item.title}</h3>
        <div className="likeWrap">
          <Like   />
          <Dislike   />
        </div>
      </div>
    </>
  );
}

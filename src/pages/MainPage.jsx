import React from "react";
import animals from "../mocks/db";
import { Photo } from "../components/Photo";
import { useSelector } from "react-redux";

export  function MainPage() {

  const numberOfLikes = useSelector((state) => state.numberOfLikes);
  const numberOfDislikes = useSelector((state) => state.numberOfDislikes);

  return (
    <section>
      <p>home page</p>
      {animals.map((item) =>
        (numberOfLikes - numberOfDislikes) > 0 && (
          <div className="object" key={item.id}>
            <Photo item={item} />
          </div>
     ) 
     )}
    </section>
  );
}

import React from "react";
import Photo from "../components/Photo";
import { useSelector } from "react-redux";

export default function TheCutest() {
  const animals = useSelector((state) => state.animals);
  return (
    <section className="mainPageBg">
      {animals.map(
        (item) =>
          item.upvotes - item.downvotes >= 5 && (
            <div className="object" key={item.id}>
              <Photo item={item} />
            </div>
          )
      )}
    </section>
  );
}

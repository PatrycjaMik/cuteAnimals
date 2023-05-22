import React from "react";
import animals from "../mocks/db";
import { Photo } from "../components/Photo";

export  function TheCutest() {
  return (
    <section>
      <p>thecutest</p>
      {animals.map((item) =>
        item.upvotes - item.downvotes > 4 ? (
          <div className="object" key={item.id}>
            <Photo item={item} />
          </div>
        ) : null
      )}
    </section>
  );
}

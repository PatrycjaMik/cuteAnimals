import React from "react";
import "./MainPage.css";
import animals from "../mocks/db.js";
import Photo from "./Photo";

export default function MainPage() {
  return (
    <section>
      <nav>
        <img src="logoCute.jpg" alt="logo" width="70px" height="70px" />
        <ul>
          <li>
            <a href="/">home page</a>
          </li>
          <li>
            <a href="/">the cutest</a>
          </li>
        </ul>
      </nav>

      {animals.map((item) => (
        <div className="object">
          <Photo item={item} />
        </div>
      ))}
    </section>
  );
}

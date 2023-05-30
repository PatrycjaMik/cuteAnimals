import React from "react";
import "./App.css";
import TheCutest from "./pages/TheCutest";
import { ErrorPage } from "./pages/ErrorPage";
import { MainPage } from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <img src="logoCute.jpg" alt="logo" width="70px" height="70px" />
        <ul>
          <li>
            <NavLink to={"/"}>home page</NavLink>
          </li>
          <li>
            <NavLink to={"/theCutest"}>the cutest</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/theCutest" element={<TheCutest />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

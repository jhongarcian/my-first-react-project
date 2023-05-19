import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Home, Error, Projects, Contact } from "../views";
import "./css/Main.css";

const Main = () => {
  return (
    <main className="x-wrap">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </main>
  );
};
export default Main;

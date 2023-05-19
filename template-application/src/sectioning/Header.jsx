import React from "react";
import { Route, Routes } from "react-router-dom";
import { About, Home, Error, Projects, Contact } from "../views";
import PageLinks from "../components/PageLinks";
import './css/Header.css'

const Header = () => {
  return (
    <header>
      <PageLinks />
    </header>
  );
};
export default Header;

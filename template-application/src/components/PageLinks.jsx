import React from "react";
import data from "../mocks/navs.json";
import PageLink from "./PageLink";

const PageLinks = () => {
  const navItems = data.map((nav) => {
    return <PageLink key={nav.id} href={nav.href} name={nav.name} />;
  });
  return (
    <nav className="x-wrap">
      <ul className="nav-list">{navItems}</ul>
    </nav>
  );
};
export default PageLinks;

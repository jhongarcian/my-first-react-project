import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageLink = ({ name, href }) => {
  const [actviveLinkName, setActviveLinkName] = useState("");

  const handleClick = (linkName) => {
    setActviveLinkName(linkName);
  };

  return (
    <li>
      <Link
        to={`${href}`}
        onClick={() => handleClick(href)}
        className={`nav-item ${actviveLinkName === href ? "active" : ""}`}
      >
        {name}
      </Link>
    </li>
  );
};
export default PageLink;

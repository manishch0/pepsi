import React from "react";
import "./navlinks.css";

function Navlinks({ label }) {
  return (
    <li className="nav-links">
      <a href="text">{label}</a>
    </li>
  );
}

export default Navlinks;

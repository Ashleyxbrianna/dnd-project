import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* <div class="left">
        <a href="#">DnD</a>
      </div> */}
      <div class="mid">
        <ul class="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/beginner">Beginner Guide</Link>
          </li>
          <li>
            <Link to="/character">Character Sheet</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
      {/* <div class="right">
        <a href="#">Welcome</a>
      </div> */}
    </div>
  );
};

export default Navbar;

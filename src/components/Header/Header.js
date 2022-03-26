import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

// header function

const Header = () => {
  return (
    <nav className="navbar nav-bar">
      <div className="container-fluid">
        <span className="navbar-brand mx-auto mb-0 nav-heading text-center">
          {/* using fontawesome icon */}
          <a href="/">
            <FontAwesomeIcon icon={faLaptop} className="me-2" />
            HP Laptop Store
          </a>
        </span>
      </div>
    </nav>
  );
};

// exporting return from header function
export default Header;

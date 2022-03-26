import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar nav-bar">
      <div className="container-fluid">
        <span className="navbar-brand mx-auto mb-0 nav-heading text-center">
          <FontAwesomeIcon icon={faLaptop} className="me-2" />
          HP Laptop Store
        </span>
      </div>
    </nav>
  );
};

export default Header;

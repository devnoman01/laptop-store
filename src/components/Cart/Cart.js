import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

// Cart function with props argument

const Cart = (props) => {
  // destructuring object properties
  const { name, picture } = props.cart;

  return (
    <div className="row px-3 py-2">
      <div className="list-parent border">
        <img src={picture} alt="" />
        <p>{name}</p>
        {/* using fontawesome icon */}
        <FontAwesomeIcon
          className="me-4 removeBtn"
          icon={faRemove}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

// exporting return from Cart function
export default Cart;

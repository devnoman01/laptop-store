import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { name, picture } = props.cart;

  return (
    <div className="row p-3">
      <div className="list-parent border">
        <img src={picture} alt="" />
        <p>{name}</p>
        <FontAwesomeIcon
          className="me-4 removeBtn"
          icon={faRemove}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Cart;

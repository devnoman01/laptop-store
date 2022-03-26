import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = (props) => {
  const { product, handleAddToCart } = props;
  const { name, price, picture } = product;
  return (
    <div className="col">
      <div className="card h-100 py-3">
        <img src={picture} className="card-img-top p-3" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text fs-5">${price}</p>
        </div>
        <div className="card-footer">
          <button
            onClick={() => handleAddToCart(product)}
            className="btn addToCartBtn"
          >
            Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

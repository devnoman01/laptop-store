import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   add to cart button handle function
  const handleAddToCart = (selectedProduct) => {
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (exist) {
      alert("Product already selected");
    } else {
      const newCart = [...cart, selectedProduct];
      setCart(newCart);
      console.log(cart);
    }
  };

  const handleRandomChoice = () => {
    if (cart.length === 0) {
      alert("No product selected to choose");
    } else {
      const newCart = [];
      const randomNumber = Math.floor(Math.random() * cart.length);
      const randomProduct = cart[randomNumber];
      newCart.push(randomProduct);
      setCart(newCart);
    }
  };

  const handleResetCart = () => {
    const newCart = [];
    setCart(newCart);
    console.log(cart);
  };

  return (
    <div className="container-xl">
      <div className="row p-2 py-4 shop-container">
        <div className="col-lg-3 col-md-12 col-sm-12 cart-container">
          <h3 className="my-3">Order Summary</h3>
          <h5 className="text-center">Selected Products: </h5>
          <div className="my-4">
            {cart.map((product) => (
              <Cart key={product.id} cart={product}></Cart>
            ))}
          </div>
          <div>
            <button onClick={handleRandomChoice} className="">
              Choose any one
            </button>
            <br />
            <button onClick={() => handleResetCart()} className="">
              Reset items
            </button>
          </div>
        </div>
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="products-container row">
            {products.map((product) => (
              <Products
                key={product.id}
                product={product}
                handleAddToCart={() => handleAddToCart(product)}
              ></Products>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

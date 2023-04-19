import React, { useState, useEffect } from "react";
import "./Products.scss";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productsSlice.js";

// import icons from react-icons
import { BsArrowRight } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";

// import link
import { Link } from "react-router-dom";

// import components
import Card from "../../components/card/Card";

import jsonData from "../../products.json";

const Products = () => {
  const open = useSelector((state) => state.sidebar.open);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={`${open && "products_"} products`}>
      <div className="head">
        <div className="section1">
          <h3>All Products</h3>
          <p>Home</p>
          <BsArrowRight />
          <Link to="">All Products</Link>
        </div>
        <div className="section2">
          <button type="button" className="new_products">
            + New Products
          </button>
          <button className="three_points">
            <GoKebabHorizontal />
          </button>
        </div>
      </div>
      <div className="body">
        {loading
          ? "Loading..."
          : products.map((item) => (
              <div key={item.id}>
                <Card
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Products;

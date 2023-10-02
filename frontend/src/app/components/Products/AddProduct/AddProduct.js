import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AddProductToDB } from "../../../../state/Product/ProductAction";

function AddNewProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    desc: "",
    rating: "",
  });

  //No need for useSelector as this component doesnt need to be a subscriber
  let dispatchToDB = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchToDB(AddProductToDB(product));
    setProduct({
      name: "",
      price: "",
      desc: "",
      rating: "",
    });
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="desc"
            value={product.desc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewProduct;

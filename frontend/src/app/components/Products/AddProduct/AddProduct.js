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
      rating: 0,
      category: "",
      image: "",
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Add a Product</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    value={product.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Description:</label>
                  <input
                    type="text"
                    name="desc"
                    id="desc"
                    value={product.desc}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rating">Rating:</label>
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    value={product.rating}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={product.category}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image URL:</label>
                  <input
                    type="text"
                    name="image"
                    id="image"
                    value={product.image}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewProduct;

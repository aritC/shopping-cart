import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetAllProductsFromDB } from "../../../state/Products/ProductsAction";

import Product from "./Product/Product";

const Products = () => {
  let products = useSelector((store) => store.productsReducer.products);
  let dispatch = useDispatch();
  const items = useSelector((store) => store.cartReducer.cartItems);

  useEffect(() => {
    dispatch(GetAllProductsFromDB());
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-4 col-sm-6 my-2" key={product._id}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetAllProductsFromDB } from "../../../state/Products/ProductsAction";

import Product from "./Product/Product";

const Products = () => {
  let products = useSelector((state) => {
    return state.productsReducer.products;
  });
  let dispatchGetAllFromDB = useDispatch();

  useEffect(() => {
    dispatchGetAllFromDB(GetAllProductsFromDB());
  }, []);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-md-4 col-sm-6 my-2" key={product.id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;

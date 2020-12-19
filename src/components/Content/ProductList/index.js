import React, { useEffect, useState } from "react";
import { productsData } from "../../../data/products.js";
import Product from "../Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = productsData();
    setProducts(data);
  }, []);

  return <Product products={products} />;
}

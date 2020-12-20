import React from "react";
import { connect } from "react-redux";
import Product from "../Product";

function ProductList(props) {
  return <Product products={props.products} />;
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductList);

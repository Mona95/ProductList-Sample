import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  return (
    <>
      <div className="content-wrapper">{props.selectedProduct.productName}</div>
      <Link to="/">Back to Product List</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  selectedProduct: state.selectedProduct,
});

export default connect(mapStateToProps)(ProductDetail);

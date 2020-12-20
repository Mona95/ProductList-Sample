import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./product.scss";
import { setCurrentProduct } from "../../../actions/actions";

function Product(props) {
  const { product } = props;
  const displayProductDetails = (product) => {
    props.setCurrentProduct(product);
  };

  return (
    <div key={product.productId} className="product-card">
      <div>
        <img src={product.img} alt="outfit" width={150} height={200} />
      </div>
      <div className="product-name">
        <span>{product.productName}</span>
      </div>
      <div className="product-price">
        <span>{product.price} $</span>
      </div>
      <div>
        <span className="desc-text">{product.description}</span>
        <Link to={`/products/${product.productId}`}>
          <button
            onClick={() => displayProductDetails(product)}
            className="more-btn"
          >
            More...
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentProduct: (productInfo) => dispatch(setCurrentProduct(productInfo)),
});

export default connect(null, mapDispatchToProps)(Product);

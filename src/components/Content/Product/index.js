import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./product.scss";

export default function Product(props) {
  return (
    <Row>
      {props.products.map((product) => (
        <div key={product.productId} className="product-card">
          <div>
            <img src={product.img} alt="outfit" width={150} height={200} />
          </div>
          <div>
            <span>{product.productName}</span>
          </div>
          <div>
            <span>{product.price} $</span>
          </div>
          <div>
            <span className="desc-text">{product.description}</span>
            <Link to={`/products/${product.productId}`}>
              <button className="more-btn">More...</button>
            </Link>
          </div>
        </div>
      ))}
    </Row>
  );
}

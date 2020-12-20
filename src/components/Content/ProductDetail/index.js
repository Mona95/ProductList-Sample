import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./productdetail.scss";

function ProductDetail(props) {
  const { selectedProduct } = props;
  return (
    <>
      {selectedProduct && (
        <Container style={{ marginTop: 15 }}>
          <Row>
            <Col>
              <img
                className="details-img"
                width={390}
                height={500}
                alt="preview"
                src={selectedProduct.img}
              />
            </Col>
            <Col
              style={{
                textAlign: "left",
                padding: 15,
              }}
            >
              <div className="details-title">
                <span>{selectedProduct.productName}</span>
              </div>
              <hr />
              <div className="details-price">
                <span>Price : {selectedProduct.price} $</span>
              </div>
              <div className="details-quantity">
                <span>Add Quantity</span>
                <div
                  className="value-button decrease_"
                  id=""
                  value="Decrease Value"
                >
                  -
                </div>
                <input
                  type="number"
                  name="qty"
                  id="number"
                  min={0}
                  defaultValue={3}
                />
                <div
                  className="value-button increase_"
                  id=""
                  value="Increase Value"
                >
                  +
                </div>
              </div>
              <div className="details-desc">
                <span className="desc-title">
                  Description About this product
                </span>
                <br />
                <span>{selectedProduct.description}</span>
              </div>
              <br />
              <div className="details-add-btn">
                <button className="btn-theme btn buy-btn" tabIndex="0">
                  Buy Now
                </button>
                <button className="btn-theme btn btn-success" tabIndex="0">
                  Add to Cart
                </button>
                <input type="hidden" name="pid" value="18" />
                <input type="hidden" name="price" value="850" />
                <input type="hidden" name="url" value="" />
              </div>
            </Col>
          </Row>
        </Container>
      )}
      <br />
      <Link className="back-btn" to="/">
        Back to Product List
      </Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  selectedProduct: state.selectedProduct,
});

export default connect(mapStateToProps)(ProductDetail);

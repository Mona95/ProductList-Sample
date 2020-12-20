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
        <Container>
          <Row>
            <Col>
              <img
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
                <span>{selectedProduct.price} $</span>
              </div>
              <div class="details-quantity">
                <span>Add Quantity</span>
                <div
                  class="value-button decrease_"
                  id=""
                  value="Decrease Value"
                >
                  -
                </div>
                <input type="number" name="qty" id="number" min={0} value={3} />
                <div
                  class="value-button increase_"
                  id=""
                  value="Increase Value"
                >
                  +
                </div>
              </div>
              <div className="details-desc">
                <span>Description About this product</span>
                <br />
                <span>{selectedProduct.description}</span>
              </div>
              <br />
              <div class="details-add-btn">
                <button class="btn-theme btn buy-btn" tabindex="0">
                  <i class="fa fa-shopping-cart"></i> Buy Now
                </button>
                <button class="btn-theme btn btn-success" tabindex="0">
                  <i class="fa fa-shopping-cart"></i> Add to Cart
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
      <br />
      <Link to="/">Back to Product List</Link>
    </>
  );
}

const mapStateToProps = (state) => ({
  selectedProduct: state.selectedProduct,
});

export default connect(mapStateToProps)(ProductDetail);
